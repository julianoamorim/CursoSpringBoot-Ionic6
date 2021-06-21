import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
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
    let localUser = this.storage.getLocalUser()
    if (localUser && localUser.email){
      this.clienteService.encontrarPorEmail(localUser.email)
      .subscribe(resposta => {
        this.cliente = resposta; //mostra os dados do usuario na pagina profile
        this.getImageIfExists();
      },
      error => {});
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
