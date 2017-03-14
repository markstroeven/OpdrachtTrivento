import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { EmployeeComponent, EmployeeModalComponent } from './Components/employee/employee.component';
import { NameFilterPipe } from './Components/name-filter.pipe';
import { JobFilterPipe } from './Components/job-filter.pipe';

import { RouterModule, Routes } from '@angular/router';

import {EmployeeService} from './Components/employee.service';
import {LoginService} from './Components/login.service';
import {StateService} from './Components/state.service';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Employee', component: EmployeeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    NameFilterPipe,
    JobFilterPipe,
    EmployeeModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EmployeeService,
    LoginService,
    StateService
  ],
  entryComponents:[
    EmployeeModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
