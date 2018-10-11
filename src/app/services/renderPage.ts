import { Injectable }  from '@angular/core';

@Injectable()

export class RenderPage{

    public patientLanding: boolean;
    public sleepDiaryFlag: boolean;

    constructor(){
        this.patientLanding = true;
        this.sleepDiaryFlag = false;
    }

    reset(){
        this.patientLanding = true;
        this.sleepDiaryFlag = false;
    }
}