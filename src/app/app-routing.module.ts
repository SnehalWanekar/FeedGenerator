import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import components
import { AdminComponent } from './admin/admin.component';
import { CreateAccountComponent } from './createaccount/createaccount.component';
import { DisplayComponent } from './display/display.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  // Define routes for each component
  { path: 'admin', component: AdminComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'display', component: DisplayComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  // Add more routes or redirect to the home page for any other unknown URLs
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
