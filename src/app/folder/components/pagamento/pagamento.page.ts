import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoDTO } from './../../../../models/pedido.dto';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  pedido: PedidoDTO;
  parcelas: number[] = [1,2,3,4,5,6,7,8,9,10];
  grupoFormulario: FormGroup; //nome do Formulario como esta declarado no HTML

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public activateRoute: ActivatedRoute,
    public router: Router
  ) {
    
    this.pedido = JSON.parse(activateRoute.snapshot.paramMap.get('data')) //pega o objeto pedido da outra pagina
    this.grupoFormulario = this.formBuilder.group({ //atributos pegos no formulario HTML
      numeroParcelas: [1, Validators.required], //pega o objeto PagamentoDTO
      "@type": ['pagamentoComCartao', Validators.required] //pega o objto PagamentoComCartao.java do BackEnd
    });
   }

  ngOnInit() {
  }

  proximaPagina(){
    this.pedido.pagamento = this.grupoFormulario.value;
    let pedido = JSON.stringify(this.pedido);
    this.router.navigate(['../confirmacao-pedido',{pedido}], {relativeTo: this.activateRoute});
  }
}
