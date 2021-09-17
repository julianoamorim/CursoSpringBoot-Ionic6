import { CredenciaisDTO } from './../../../../models/credenciais.dto';
import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController, NavController } from '@ionic/angular'; //controle de navegacao
import { AuthService } from 'src/services/auth.service';

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
      this.auth.sucessoLogin(resposta.headers.get('Authorization')); //consegue pegar o token pelo header no backend no arquivo JWTFiltroAutenticacao
      this.navCtrl.navigateRoot('folder/components/categorias'); //navega da home para categoria
    },
    error => {});
    this.showLoader();
    
    //this.navCtrl.navigateForward('folder/components/categorias') //permite voltar para essa pagina
  }

  signup(){
    this.navCtrl.navigateRoot('folder/components/signup');
  }

  async showLoader(){ //metodo usado em requisicoes q podem demorar, gerando a tela de Loading...
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: 500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  ngOnInit() {
  }

}
