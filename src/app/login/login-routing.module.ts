import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginRoutedComponent } from './login-routed.component';

const loginRoutes: Routes = [
  {
    path: '',
    component: LoginRoutedComponent,
    children: [
      {
        path: '',
        component: LoginComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/login'
    },
    {
        path: '**',
        redirectTo: '/login'

    }
    ]
  }
    
];
@NgModule({
    imports: [
      RouterModule.forChild(
        loginRoutes
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class LoginRoutingModule { }