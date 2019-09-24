import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegisterService } from '../register.service';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';
import { Interpolation } from '@angular/compiler';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  pattern="";
  userModel= new User('','','');
  user=User;

  constructor(private registerService: RegisterService) {

   }
   onSubmit(regForm: Interpolation){
     /* this.registerService.register(this.userModel)
      .subscribe(
        data=> console.log('success',data),
        error=>console.error('Error',error)
      ) */
      
    
      
     
     console.log(this.userModel);
     

   }
data:any;
  ngOnInit() {

   
  

  }
  

  

}
