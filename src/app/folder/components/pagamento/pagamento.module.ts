import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentoPageRoutingModule } from './pagamento-routing.module';

import { PagamentoPage } from './pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, //modulo p habilitar formulario no HTML
    ReactiveFormsModule, //modulo p habilitar formulario no HTML
    IonicModule,
    PagamentoPageRoutingModule
  ],
  declarations: [PagamentoPage]
})
export class PagamentoPageModule {}
