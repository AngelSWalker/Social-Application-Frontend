import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile-pic',
  templateUrl: './profile-pic.component.html',
  styleUrls: ['./profile-pic.component.css']
})
export class ProfilePicComponent implements OnInit {

  fileToUpload: any;;
  profilePic: any;

  constructor(private userServ: UserService) { }

  ngOnInit(): void {
    //this.getUserData()
  }

  /* getUserData(){
    if (this.authService.isLoggedIn()) {
      let userId = this.authService.currentUser().user._id;

      this.userService.getUserData(userId)
        .subscribe( data => {
          if (data.obj.profilePicture.uploaded){
            this.profilePic = '../../images/profile-pictures/' + data.obj.profilePicture.name;
          }
      })
    } 
  } */

}