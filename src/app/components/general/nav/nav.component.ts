import { Component, OnInit } from '@angular/core';
import { RenderPage } from '../../../services/renderPage';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private renderPage:RenderPage) { }
  onClick(){
    console.log('clicked');
    this.renderPage.reset();
  }
  ngOnInit() {
  }

}
