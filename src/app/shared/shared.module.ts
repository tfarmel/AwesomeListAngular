import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    NgxBootstrapModule,
    SidenavComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
