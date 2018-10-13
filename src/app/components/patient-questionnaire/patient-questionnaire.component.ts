import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-questionnaire',
  templateUrl: './patient-questionnaire.component.html',
  styleUrls: ['./patient-questionnaire.component.css']
})
export class PatientQuestionnaireComponent implements OnInit {

  form_sections = ['home-form', 'medical-history-form', 'eds-screen',
    'current-sleep-problem', 'medication', 'generalized-anxiety'];
  current_form: string;
  constructor() {
    this.current_form = this.form_sections[0];
  }

  getDisplay(id) {
    switch (this.current_form) {
      case this.form_sections[id]:
        return 'block';
      default:
        return 'none';
    }
  }
  onClick(id) {
    this.current_form = this.form_sections[id];
  }
  onSubmit(data: NgForm) {
    console.log(data.form.controls.firstName.value);
  }
  ngOnInit() {
  }

}
