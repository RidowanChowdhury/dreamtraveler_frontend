import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';  
import { Post } from '../post'; 
import { Responsedto } from '../responsedto';
import { Router } from "@angular/router";

@Component({
  selector: 'app-postfeed',
  templateUrl: './postfeed.component.html',
  styleUrls: ['./postfeed.component.css']
})
export class PostfeedComponent implements OnInit {


  responseDTO : Responsedto;
  allPost: Post[];

  constructor(private userService:UserService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.getAllPost();
  }


  getAllPost() {
    this.userService.getPostFeed()  
        .subscribe(data => { 
          console.log(data);  
            this.responseDTO = data;
            this.allPost = this.responseDTO.data;
           
        },error => {
          this.router.navigate(['/login']);
        alert("you are logged in, please log in first");
      }); 
  }

  routeAllPage() {
    this.router.navigate(['/allpost']);
      
  }

  routeNewPage() {
    this.router.navigate(['/newpost']);
      
  }
}
