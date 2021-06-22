import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Observable} from 'rxjs';
import { API_CONFIG } from 'src/config/api.config';
import { ClienteDTO } from 'src/models/cliente.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  providers: [NavParams] //tem q colocar para carregar a pagina
})
export class ProfilePage implements OnInit {

  cliente: ClienteDTO;

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService
    ) { }


  ngOnInit() { //funcoes carregadas junto com a pagina
    console.log('Olá mundo')
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.encontrarPorEmail(localUser.email)
      .subscribe(response => {
        this.cliente = response as ClienteDTO;
        this.getImageIfExists();
        console.log(response)
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
  

  getImageIfExists() { //verifica se a imagem do cliente exite na AWS
    this.clienteService.buscarImagemBucket(this.cliente.id)
    .subscribe(response => {
      this.cliente.imageUrl = `${API_CONFIG.bucketAWSUrl}/cp${this.cliente.id}.jpg`;
    },
    error => {});
  }

}
