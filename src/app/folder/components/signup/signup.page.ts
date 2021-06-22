import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  providers: [NavParams] //tem q colocar para carregar a pagina
})
export class SignupPage implements OnInit {

  grupoFormulario: FormGroup;

  constructor(
    public navParam: NavParams,
    public navCtrl: NavController,
    public formBuilder: FormBuilder) { 

    this.grupoFormulario = this.formBuilder.group({
      nome: ['Joaquim', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]], //valor inicial, valores validos
      email: ['joaquim@gmail.com', [Validators.required, Validators.email]],
      tipo : ['1', [Validators.required]],
      cpfOuCnpj : ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha : ['123', [Validators.required]],
      logradouro : ['Rua Via', [Validators.required]],
      numero : ['25', [Validators.required]],
      complemento : ['Apto 3', []],
      bairro : ['Copacabana', []],
      cep : ['10828333', [Validators.required]],
      telefone1 : ['977261827', [Validators.required]],
      telefone2 : ['', []],
      telefone3 : ['', []],
      estadoId : [null, [Validators.required]],
      cidadeId : [null, [Validators.required]]   
    });
  }

  ngOnInit() {
  }

  signupUser(){
    console.log('Enviou o formulario')
  }

}
