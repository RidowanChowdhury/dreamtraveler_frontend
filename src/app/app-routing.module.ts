import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddTravelerComponent} from './add-traveler/add-traveler.component';
import {LoginComponent} from './login/login.component';
import {NewpostComponent} from './newpost/newpost.component';
import {PostfeedComponent} from './postfeed/postfeed.component';


const routes: Routes = [{ path: 'register', component: AddTravelerComponent },
                      { path: 'login', component: LoginComponent },
                      { path: 'newpost', component: NewpostComponent },
                      { path: 'allpost', component: PostfeedComponent },
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
