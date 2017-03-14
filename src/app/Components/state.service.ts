import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class StateService {

  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public broadcastStateChange_Login(newState: boolean): void{
    this.loggedIn.next(newState);
  }

}
