import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSleepDiaryComponent } from './patient-sleep-diary.component';

describe('PatientSleepDiaryComponent', () => {
  let component: PatientSleepDiaryComponent;
  let fixture: ComponentFixture<PatientSleepDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSleepDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSleepDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
