import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Employee} from "../Domain/employee";

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }

  public getEmployees() : Observable<Employee[]>{
    return this.http.get('/assets/user_list.json').map(this.extractEmployees);
  }
  public extractEmployees(res:Response):Employee[]{
    var arr : Employee[] = [];
    var body = res.json();
    for(var key in body){
      arr.push(new Employee(body[key]));
    }
    return arr;
  }

}
