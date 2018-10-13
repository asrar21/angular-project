//libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChartsComponent } from './components/charts/charts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PatientComponent } from './components/patient/patient.component';
import { NavComponent } from './components/general/nav/nav.component';
import { PatientQuestionnaireComponent } from './components/patient-questionnaire/patient-questionnaire.component';
import { PatientSleepDiaryComponent } from './components/patient-sleep-diary/patient-sleep-diary.component';

// services
import { Title } from './services/title.service';
import { RenderPage } from './services/renderPage';
import { ApiServices } from './services/apiServer';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChartsComponent,
    DashboardComponent,
    PatientComponent,
    NavComponent,
    PatientQuestionnaireComponent,
    PatientSleepDiaryComponent,
    SignupComponent
  ],
  imports: [
  BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule,
    RouterModule.forRoot([
      { path:'dashboard', component: DashboardComponent },
      { path:'patient', component: PatientComponent },
      { path:'signup', component: SignupComponent}
      
    ])
  ],
  providers: [
    Title,
    RenderPage,
    ApiServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
