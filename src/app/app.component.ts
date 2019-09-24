import { Component, OnInit } from '@angular/core';
import { CdateCtime } from './cdate-ctime';
import{ Router } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,CdateCtime {
  title= "Welcome"

  cdatectime: Date = new Date();
 
  ngOnInit() {
   // this.checkOverflow();
}

/*
  onSubmit(event){
    console.log("event",event);
    
  alert("The form was submitted");
}*/


constructor(private router: Router){} 

signUp(){
  this.router.navigate(['/register']);
}
  }

