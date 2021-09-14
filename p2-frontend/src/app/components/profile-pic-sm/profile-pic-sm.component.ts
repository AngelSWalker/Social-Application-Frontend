import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile-pic-sm',
  templateUrl: './profile-pic-sm.component.html',
  styleUrls: ['./profile-pic-sm.component.css']
})
export class ProfilePicSmComponent implements OnInit {

  user: User = {
    userId: 0,
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
    aboutMe: "",
    bday: undefined,
    pro_pic_url: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}