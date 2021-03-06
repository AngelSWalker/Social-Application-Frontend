import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comment-thread',
  templateUrl: './comment-thread.component.html',
  styleUrls: ['./comment-thread.component.css']
})
export class CommentThreadComponent implements OnInit {

  commentThread: Array<any> = [];
  observer: Subscription = new Subscription;

  @Output() commentCount: EventEmitter<number> = new EventEmitter<number>();
  @Input()
  postId: number = 0;

  constructor(private router: Router, private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getCommentsByPostId(this.postId).subscribe(comments => {
      this.commentThread = comments.data;
      this.commentCount.emit(this.commentThread.length);
    })
  }
}
