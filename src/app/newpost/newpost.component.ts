import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import {FormControl,FormGroup,Validators} from '@angular/forms';  
import { Post } from '../post'; 
import { Router } from "@angular/router"; 
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {

  constructor(private userService:UserService,
    private router: Router) { }  
  
  post : Post=new Post();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  postsaveform=new FormGroup({  
    post:new FormControl('' , [Validators.required , Validators.minLength(2) ] ),  
    privacy:new FormControl('', [Validators.required]),  
    location:new FormControl('',[Validators.required]),  
          
  });  
  
  SavePost(){  
    
    this.post=new Post();     
    this.post.post=this.postsaveform.get('post').value; 
    this.post.privacy=this.Privacy.value;
    this.post.location=this.Location.value;

    console.log("check dropdown value"+this.post.privacy);   
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.userService.addNewPost(this.post)  
      .subscribe(data => console.log(data), error => console.log(error));  
      
  }   
  get Location(){  
    return this.postsaveform.get('location');  
  } 

  get Privacy(){  
    return this.postsaveform.get('privacy');  
  }

  routeAllPage() {
    this.router.navigate(['/allpost']);
      
  }

  routeNewPage() {
    this.router.navigate(['/newpost']);
      
  }

}
