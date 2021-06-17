import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [NavParams] //tem q colocar para carregar a pagina
})
export class ProfilePage implements OnInit {

  email: string

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public storage: StorageService
    ) { }

  ngOnInit() { //funcoes carregadas junto com a pagina
    let LocalUser = this.storage.getLocalUser()
    if (LocalUser && LocalUser.email){
      this.email = LocalUser.email; //mostra o email na pag de profile
    }
  }



}
