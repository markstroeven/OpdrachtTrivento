import { Component, OnInit } from '@angular/core';
import {User} from "../../Domain/user";
import {LoginService} from "../login.service";
import {Response} from "@angular/http";
import {Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public credentials: User = new User({username: null, password: null});
  constructor(private loginService: LoginService, private snackBar: MdSnackBar, private router: Router) { }

  ngOnInit() {
  }

  public doLogin():void{
    this.loginService.doLogin(this.credentials).subscribe((user:User)=>{
        if(this.credentials.username === user.username && this.credentials.password === user.password){
          this.snackBar.open("Welkom", "OK", {
            duration: 2000,
          });
          this.router.navigate(['Employee']);
        }else{
          this.snackBar.open("Ongeldige gebruikersgegevens", "OK", {
            duration: 2000,
          });
        }
    });
  }

}
