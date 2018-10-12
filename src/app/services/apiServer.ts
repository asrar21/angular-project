import { Injectable }  from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
@Injectable()

export class ApiServices{
    public patient = {};
    public notUser = 'user doesnot exists';
    public warning = '';
    constructor(private http:Http, private router:Router){

    }

    patientLogin(patient){
        console.log('patient login');
        this.http.post('http://localhost:5000/api/login', patient)
        .subscribe( res => {
            if(res.text() !== this.notUser){
                this.patient = res.json();
                this.router.navigate(['patient']);
                
            }else{
                console.log( res.text() );
                this.warning = 'Username or password is incorrect';
            }
        });
    }
    currentUser(){

    }
}
