import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import { LoginComponent } from './login/login.component';
import {LoginRoutingModule} from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';



@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    SharedModule,
    LoginRoutingModule // Et Ajoutez-le !
  ]
})
export class LoginModule { }
