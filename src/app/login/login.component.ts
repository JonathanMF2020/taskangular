import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string;
  password:string;
  error:string;
  constructor(){
    this.email = "";
    this.password = "";
    this.error = "";
  }

  login(){
    const user = environment.userstest.filter(e => e.email == this.email && e.password == this.password)[0];
    console.log(user);
    console.log(this.email);
    console.log(this.password);
    if(user != null && user != undefined)
    {
      localStorage.setItem("email",user.email);
    }else{
      this.error = "No existe ese usuario";
    }
    
  }

}
