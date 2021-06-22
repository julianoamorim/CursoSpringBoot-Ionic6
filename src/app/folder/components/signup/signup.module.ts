import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { HomePageRoutingModule } from '../home/home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageRoutingModule,
    ReactiveFormsModule, //modulo necessario para carregar o formulario da pagina
    HomePageRoutingModule,
    FormsModule,
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
