import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular'; //controle de navegacao

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public menu: MenuController) {

   }

   ionViewWillEnter() { //desabilita o Menu na tela Home
    this.menu.enable(false);
    }

    ionViewDidLeave() { //habilita o Menu na tela Home
    this.menu.enable(true);
    }

  login(){
    //this.navCtrl.navigateForward('folder/components/categorias') //permite voltar para essa pagina
    this.navCtrl.navigateRoot('folder/components/categorias'); //navega da home para categoria
  }

  ngOnInit() {
  }

}
