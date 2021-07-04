import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { User } from '../user';  
import { Router } from "@angular/router";
import { Responsedto } from '../responsedto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  responseDTO : Responsedto;
  
    constructor(private router: Router,
      private userService:UserService) { }  
    
    user : User=new User();  
    submitted = false;  
    logindata : any;
    
    ngOnInit() {  
      this.submitted=false;  
    }  
    
    usersaveform=new FormGroup({   
      email:new FormControl('',[Validators.required,Validators.email]),  
      password:new FormControl('',[Validators.required]),  
        
    });  
    
    loginUser(loginUser){  
      this.user=new User();       
      this.user.email=this.usersaveform.get('email').value;  
      this.user.password=this.usersaveform.get('password').value; 
      this.submitted = true;  
      this.save();  
    }  
    
      
    
    save() {  
      this.userService.loginUser(this.user)  
        .subscribe(data => { 
          console.log(data);  
            this.responseDTO = data;		
          if(this.responseDTO.success) {
            this.router.navigate(['/allpost']);
            // alert("Hello new user");
            this.setCookie(this.responseDTO.jwt);

          }
        }); 
      
      
    }   

    setCookie(jwt:String) {
      this.userService.setCookie("jwt",jwt);
      console.log("cookie is "+jwt);
      console.log("cookie is from "+this.userService.getCookie("jwt"));

    }



  
  }
  
