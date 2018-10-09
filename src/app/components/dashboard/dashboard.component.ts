import { Component, OnInit } from '@angular/core';
import { Title } from '../../services/title.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private title: Title){}

  form_title = [" Patient Portal"," Analyst Portal"," Doctor Portal"];
  form_flag = false;

  onClick(id){
    this.form_flag= true;
    this.title.Title = this.form_title[id];
  } 

  ngOnInit() {
  }

}
