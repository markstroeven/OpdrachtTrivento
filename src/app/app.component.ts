import { Component } from '@angular/core';
import {StateService} from "./Components/state.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showMenu : boolean = false;

  public constructor(private router:Router){
    router.events.subscribe((ev)=>{
      if(ev.url === '/Login'){
        this.showMenu = false;
      }else{
        this.showMenu = true;
      }
    });
  }

}
