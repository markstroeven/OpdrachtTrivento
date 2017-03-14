import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {User} from "../Domain/user";
import {Observable} from "rxjs";

@Injectable()
export class LoginService {

  constructor(private http:Http) { }

  public doLogin(credentials:User):Observable<User>{
    return this.http.get('/assets/users.json').map(this.extractUser);
  }

  public extractUser(res:Response):User{
    return new User(res.json());
  }

}
