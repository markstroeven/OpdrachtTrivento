import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from "../Domain/employee";

@Pipe({
  name: 'jobFilter'
})
export class JobFilterPipe implements PipeTransform {

  transform(employees: Employee[], query: string): any {
    if(employees !== null) {
      return employees.filter((employees: Employee) => {
        return employees.job_role.includes(query);
      })
    }
  }

}
