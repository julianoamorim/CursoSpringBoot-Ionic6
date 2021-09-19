import { CredenciaisDTO } from './../../../../models/credenciais.dto';
import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular'; //controle de navegacao
import { AuthService } from 'src/services/auth.service';
import { from, Observable } from 'rxjs';
import { finalize, flatMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //inicializa as credenciais
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  }

  isLoading: boolean = false; //variavel para verificar se a pagina esta carregando ou nao

  constructor(public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService,
    public loadingCtrl: LoadingController) { }

   ionViewWillEnter() { //desabilita o Menu na tela Home
    this.menu.enable(false);
    }

    ionViewDidLeave() { //habilita o Menu na tela Home
    this.menu.enable(true);
    }

    ionViewDidEnter(){
      this.auth.recarrecarToken()
      .subscribe(resposta => {
        this.auth.sucessoLogin(resposta.headers.get('Authorization')); //consegue pegar o token pelo header no backend no arquivo JWTFiltroAutenticacao
        this.navCtrl.navigateRoot('folder/components/categorias'); //navega da home para categoria
      },
      error => {});
    }

  login(){
    
    this.auth.autenticado(this.creds)
    .subscribe(resposta => {
      this.showLoader();
      this.auth.sucessoLogin(resposta.headers.get('Authorization')); //consegue pegar o token pelo header no backend no arquivo JWTFiltroAutenticacao
      this.isLoading = false; //desabilita o loading apos a resposta HTTPS
      this.navCtrl.navigateRoot('folder/components/categorias'); //navega da home para categoria
    },
    error => {});
    
    //this.navCtrl.navigateForward('folder/components/categorias') //permite voltar para essa pagina
  }

  signup(){
    this.navCtrl.navigateRoot('folder/components/signup');
  }

  async showLoader(){ //metodo usado em requisicoes q podem demorar, gerando a tela de Loading...
    this.isLoading = true;
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: 5000
    });
    await loading.present().then(() => {
      console.log('carregando');
      if(!this.isLoading)
        loading.dismiss().then(() => console.log('Dismiss'))
    })
  }

  ngOnInit() {
  }

}
