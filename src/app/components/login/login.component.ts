import { Component, OnInit } from '@angular/core';
import { Title } from '../../services/title.service';
import { NgForm } from '@angular/forms';
import { ApiServices } from '../../services/apiServer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private name:Title, private apiServices:ApiServices) { 
  }
  onSubmit(data:NgForm){
    const { username, password } = data.form.controls;
    const user = { // user maybe patient, analyst, doctor
      username: username.value,
      password: password.value
    }
    // console.log(user);
    this.apiServices.patientLogin(user);
  }
  Title(){
    return this.name.Title;
  }
  ngOnInit() { }
}
