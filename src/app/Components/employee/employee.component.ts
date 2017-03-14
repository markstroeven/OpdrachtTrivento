import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Employee} from "../../Domain/employee";
import {MdSnackBar, MdDialogRef, MdDialog} from "@angular/material";
import {routerTransition} from "../RouterTransition";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class EmployeeComponent implements OnInit {

  public employees: Employee[] = [];
  public jobRoles : string[] = [];
  public maxRecords : number = 10;
  public queryText : string = "";
  public queryRole: string = "";

  constructor(private employeeService: EmployeeService, private snackBar: MdSnackBar, private dialog: MdDialog) { }

  ngOnInit() {
    this.refreshData();
  }

  public loadMore():void{
    this.maxRecords += 5;
    this.snackBar.open("Meer gegevens worden geladen", "OK", {
      duration: 2000,
    });
  }

  public refreshData():void{
    this.employeeService.getEmployees().subscribe((employees)=>{
      this.jobRoles = [];
      this.employees = employees;
      for(let employee of employees){
        if(!this.containsRole(employee.job_role)){
          this.jobRoles.push(employee.job_role);
        }
      }
    });
  }
  public containsRole(role:string):boolean{
    for(var key in this.jobRoles){
      if(this.jobRoles[key] === role){
        return true;
      }
    }
    return false;
  }

  public mutate(employee:Employee):void{
    let ref = this.dialog.open(EmployeeModalComponent);
    let instance = ref.componentInstance;

    instance.employeeObject = new Employee(employee);
    instance.ref = ref;
    ref.afterClosed().subscribe((response:Employee)=>{
      //check if user aborted modal window
      if(response !== undefined){
        console.log(response);
        for(var key in this.employees){
          if(this.employees[key].id == response.id){
            this.employees[key].copyFrom(response);
          }
        }
        this.snackBar.open("Wijzigingen zijn opgeslagen", "OK", {
          duration: 2000,
        });
      }
    });
  }

}

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee.modal.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeModalComponent{

  public ref: any = null;
  public employeeObject : Employee = null;

  public constructor(){

  };

  public doEdit():void{
    this.ref.close(this.employeeObject);
  };

}
