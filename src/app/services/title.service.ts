import { Injectable }  from '@angular/core';

@Injectable()

export class Title{
    private title = '';

    set Title(title){
        this.title = title;
    }
    get Title(){

        return this.title;
    }
}