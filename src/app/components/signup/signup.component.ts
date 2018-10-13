import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServices } from 'src/app/services/apiServer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private apiServices:ApiServices) { }

  onSubmit(data:NgForm){
    console.log(data.form.controls);
    const { firstName, lastName, username, password, email, dob, phoneNo, neckSize, bmi } = data.form.controls;
    const user = { firstName:firstName.value, lastName:lastName.value, username:username.value, password:password.value, email:email.value, dob:dob.value, phoneNo:phoneNo.value, neckSize:neckSize.value, bmi:bmi.value,
            type: 'Patient' };
    console.log(user);
  }

  ngOnInit() {
  }

}
