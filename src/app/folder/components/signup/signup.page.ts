import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, NavParams, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CidadeService } from 'src/services/domain/cidade.service';
import { EstadoService } from 'src/services/domain/estado.service';
import { EstadoDTO } from 'src/models/estado.dto';
import { CidadeDTO } from 'src/models/cidade.dto';
import { ClienteService } from 'src/services/domain/cliente.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {

  grupoFormulario: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(
    public navParam: NavParams,
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService,
    public clienteService: ClienteService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public menu: MenuController) { 
    
    
    //Esta tendo erro ao acessar os "estados" no backend, necessario habilitar o HTTPS no Spring Boot, trabalhoso
    this.grupoFormulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]], //valor inicial, valores validos
      email: ['', [Validators.required, Validators.email]],
      tipo : ['1', [Validators.required]],
      cpfOuCnpj : ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      senha : ['', [Validators.required]],
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

  isLoading: boolean = false; //variavel para verificar se a pagina esta carregando ou nao

  ionViewWillEnter() { //desabilita o Menu na tela de Cadastro
    this.menu.swipeGesture(false);
    }

  ionViewDidLeave() { //habilita o Menu na tela de Cadastro
    this.menu.swipeGesture(true);
    }

  ngOnInit() {

    this.estadoService.encontrarTodos()
    .subscribe(resposta => {
      this.estados = resposta;
      this.grupoFormulario.controls.estadoId.setValue(this.estados[0].id) //pega o primeiro estado da lista
      this.updateCidades(); //busca as cidades do estado selecionado
    }, error =>{})
  }

  updateCidades(){
    let estado_id = this.grupoFormulario.value.estadoId
    if(estado_id!=null){ //corrige o alerta na tela de estado null
      this.cidadeService.encontrarTodos(estado_id)
      .subscribe(response => {
        this.cidades = response;
        this.grupoFormulario.controls.cidadeId.setValue(null); //tira a seleçao da caixa da cidade selecionada
      }, error =>{})
    }
  }

  cadastrarUsuario(){
    this.showLoader();
    this.clienteService.inserir(this.grupoFormulario.value)
    .subscribe(response => {
      this.showInsertOk();
    },
    error => {}
    );
  }

  async showInsertOk(){ //mostra uma msg na tela informando sobre o cadastro
    const alert = await this.alertCtrl.create({
      header: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso!\n Verifique seu email!',
      backdropDismiss: false, // p fechar e necessario clicar na msg
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.navCtrl.navigateRoot('folder/components/home') //desimpilhar a pagina e volta para o login
        }
      }]
    });
    await alert.present();
  }

  async showLoader(){ //metodo usado em requisicoes q podem demorar, gerando a tela de Loading...
    this.isLoading = true;
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Enviando Email!   Aguarde...',
      duration: 2000
    });
    await loading.present().then(() => {
      console.log('carregando');
      if(!this.isLoading)
        loading.dismiss().then(() => console.log('Dismiss'))
    })
  }

}
