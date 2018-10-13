import { Injectable }  from '@angular/core';

@Injectable()

export class RenderPage{

    public patientLanding: boolean;
    public sleepDiaryFlag: boolean;
    public patientQuestionnare: boolean;

    constructor(){
        this.patientLanding = true;
        this.sleepDiaryFlag = false;
        this.patientQuestionnare = false;
    }

    reset(){
        this.patientLanding = true;
        this.sleepDiaryFlag = false;
        this.patientQuestionnare = false;
    }
}