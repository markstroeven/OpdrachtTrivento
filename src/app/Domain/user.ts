export class User{

  public username:string = null;
  password : string = null;

  public constructor(data? : any){
    if(data !== null){
      this.username=data.username;
      this.password=data.password;
    }
  }

}
