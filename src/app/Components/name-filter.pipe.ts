import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from "../Domain/employee";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: Employee[], queryText: string): any {
    if (value !== null) {
      return value.filter((item: Employee) => {
        return item.first_name.toLowerCase().includes(queryText.toLowerCase()) || item.last_name.toLowerCase().includes(queryText.toLowerCase());
      });
    }
  }

}
