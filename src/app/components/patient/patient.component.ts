import { Component, OnInit } from '@angular/core';
import { RenderPage } from '../../services/renderPage';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor(private renderPage:RenderPage) {
  }

  toggleSleepDiary(){
    this.renderPage.sleepDiaryFlag = true;
    this.renderPage.patientLanding = false;
  }
  togglePatientQuestionnare(){
    this.renderPage.patientQuestionnare = true;
    this.renderPage.patientLanding = false;
  }
  getDisplay(){
    return (this.renderPage.patientLanding===true)? 'block' : 'none';
  }
  ngOnInit() {
  }

}
