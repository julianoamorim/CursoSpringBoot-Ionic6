import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { CidadeService } from 'src/services/domain/cidade.service';
import { EstadoService } from 'src/services/domain/estado.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, //modulo necessario para carregar o formulario da pagina
    IonicModule,
    SignupPageRoutingModule,
    ReactiveFormsModule, //modulo necessario para carregar o formulario da pagina
    HomePageRoutingModule
  ],
  declarations: [SignupPage],
  providers: [
    CidadeService,
    EstadoService
  ]
})
export class SignupPageModule {}
