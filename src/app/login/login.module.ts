import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutedComponent } from './login-routed.component';

@NgModule({
  declarations: [
    LoginRoutedComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    LoginRoutingModule
  ],
  providers: [],
})
export class LoginModule { }
