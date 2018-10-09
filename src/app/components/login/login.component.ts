import { Component, OnInit } from '@angular/core';
import { Title } from '../../services/title.service';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = '';
  constructor(private name:Title, private http:Http) { 
    this.title = this.name.Title;
  }
  onSubmit(data:NgForm){
    const { username, password } = data.form.controls;
    const user = {
      name: username.value,
      password: password.value
    }
    this.http.post('http://localhost:5000/api/login', user)
      .subscribe( 
        res => console.log(res)
      );
  }

  ngOnInit() {
  }
}
