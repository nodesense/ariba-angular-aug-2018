import { AuthGuard } from './guards/auth.guard';
import { InterceptorService } from './services/interceptor.service';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';

import {Routes, RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],

  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AuthModule { }