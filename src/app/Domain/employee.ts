export class Employee{

  public id: number;
  public first_name: string;
  public last_name: string;
  public email: string;
  public gender: string;
  public address: string;
  public job_role:string;

  public constructor(data? : any){
    if(data !== null){
      this.id = data.id;
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.email = data.email;
      this.gender = data.gender;
      this.address = data.address;
      this.job_role = data.job_role;
    }
  }

  public copyFrom(employee?:Employee):void{
    if(employee !== null){
      this.id = employee.id;
      this.first_name = employee.first_name;
      this.last_name = employee.last_name;
      this.email = employee.email;
      this.gender = employee.gender;
      this.address = employee.address;
      this.job_role = employee.job_role;
    }
  }


}
