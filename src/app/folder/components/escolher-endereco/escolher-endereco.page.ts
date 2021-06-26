import { ClienteService } from 'src/services/domain/cliente.service';
import { EnderecoDTO } from './../../../../models/endereco.dto';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-escolher-endereco',
  templateUrl: './escolher-endereco.page.html',
  styleUrls: ['./escolher-endereco.page.scss'],
})
export class EscolherEnderecoPage implements OnInit {

  items : EnderecoDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService
  ) { }

  ngOnInit() {

    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.encontrarPorEmail(localUser.email)
      .subscribe(response => {
        this.items = response['enderecos']; //entre [] evita o erro do compilador na busca do backend
      },
      (error) => { //Nao esta funcionando, o Observable error foi descontinuado na versao atual do modulo rxjs
        console.log(error)
        if (error.status == 403) {
          console.log('voltando')
          this.navCtrl.navigateRoot('folder/components/home')
        }
      });
    }
    else {
      this.navCtrl.navigateRoot('folder/components/home')
    }    

  }

}
