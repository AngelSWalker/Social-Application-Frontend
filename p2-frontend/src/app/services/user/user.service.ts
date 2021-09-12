import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpCli: HttpClient) { }

  register(user: User) {
    return this.httpCli.post(`http://localhost:9000/api/user`, user);
  }

  login(user: User) {
    return this.httpCli.post(`http://localhost:9000/api/login`, user);
  }
}
