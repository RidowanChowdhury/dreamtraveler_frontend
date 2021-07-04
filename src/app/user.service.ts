import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Responsedto} from '../app/responsedto';
import {User} from '../app/user'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private regUrl = 'http://localhost:8080/registration/newuser';
  private loginUrl = 'http://localhost:8080/registration/login';
  private addPostUrl = 'http://localhost:8080/post/newpost';
  private postFeedUrl = 'http://localhost:8080/post/postfeed';

  constructor(private http:HttpClient) { }

  createUser(user: object): Observable<object> {  
    return this.http.post(`${this.regUrl}`, user);  
  }

  loginUser(user: object): Observable<any> {  
    return this.http.post(`${this.loginUrl}`, user);  
  }

  addNewPost(post: object): Observable<any> {  
    let headerss:Headers;
    return this.http.post(`${this.addPostUrl}`, post,{headers: this.createAuthorizationHeader("jwt")});  
  }

  getPostFeed(): Observable<any> {  
    let headerss:Headers;
    return this.http.get(`${this.postFeedUrl}`,{headers: this.createAuthorizationHeader("jwt")});  
  }

  createAuthorizationHeader(bearerToken: string): HttpHeaders {
    const headerDict = {
      Authorization: 'Bearer ' + this.getCookie(bearerToken),
    }
    return new HttpHeaders(headerDict);
  }

  

  setCookie(name:String,value:String) {
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + (1*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
    
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
  getCookie(name:String) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

}
