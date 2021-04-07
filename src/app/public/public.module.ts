import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
//import { LoginModule } from './login/login.module';
import {SharedModule} from '../shared/shared.module';
import { RegisterRoutingModule } from './register/register-routing.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    //RegisterModule,
    //RegisterRoutingModule,
    //LoginModule, // Et retirez absolument le module Login !
    //LoginRoutingModule
  ]
})
export class PublicModule { }
