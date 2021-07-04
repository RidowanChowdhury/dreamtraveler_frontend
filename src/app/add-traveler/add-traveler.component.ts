import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { User } from '../user';  
@Component({
  selector: 'app-add-traveler',
  templateUrl: './add-traveler.component.html',
  styleUrls: ['./add-traveler.component.css']
})
export class AddTravelerComponent implements OnInit {

  constructor(private userService:UserService) { }  
  
  user : User=new User();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  usersaveform=new FormGroup({  
    first_name:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),  
    last_name:new FormControl(''),  
    email:new FormControl('',[Validators.required,Validators.email]),  
    password:new FormControl('',[Validators.required]),  
      
  });  
  
  saveUser(saveUser){  
    this.user=new User();     
    this.user.firstName=this.usersaveform.get('first_name').value; 
    console.log("First Name is: "+this.user.firstName);
    this.user.lastName=this.usersaveform.get('last_name').value;   
    this.user.email=this.usersaveform.get('email').value;  
    this.user.password=this.usersaveform.get('password').value; 
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.userService.createUser(this.user)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.user = new User();  
  }   

}
