import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() pageCount: number = 0;
  userId: number = 0;
  postList: Array<Post> = [];
  listTemp: Array<Post> = [];
  observer: Subscription = new Subscription;
  stringInput: string = "";
  navigationSubscription: any;
  // put object for all users here

  constructor(private postServ: PostService, private router: Router, private route: ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) this.ngOnInit();
    })
  }

  ngOnInit(): void {
    // Call the userService getAllUsers endpoint here
    console.log(this.pageCount);

    // if query parameter userId > 0 load all posts for userId, else load all posts
    this.route.queryParams
      .subscribe(params => {
        if (Number(params.userId) > 0) {
          this.postServ.getAllPostsForOneUser(Number(params.userId))
        .subscribe(posts => {
          this.postList = posts.data;
        })
        } else {
          this.postServ.getAllPosts().subscribe(posts => {
            this.postList = posts.data.content;
          })
        }
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.pageCount.currentValue);
    this.postServ.getNextPageOfPosts(changes.pageCount.currentValue)
      .subscribe(posts => {
        console.log(posts);
        posts.data.content.forEach((post: any) => {
          this.postList.push(post);
        });
      })
  }

  ngOnDestroy(): void{
    this.observer.unsubscribe();

    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  ngDoCheck(): void{
    //this.listTemp = this.postList.filter(post => post.postText?.startsWith(this.stringInput))
  }

}
