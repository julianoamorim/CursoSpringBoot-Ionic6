import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController, NavParams } from '@ionic/angular';
import { API_CONFIG } from 'src/config/api.config';
import { ClienteDTO } from 'src/models/cliente.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { StorageService } from 'src/services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage implements OnInit {

  cliente: ClienteDTO;
  foto: string;
  cameraOn: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public storage: StorageService,
    public clienteService: ClienteService,
    public camera: Camera
    ) { }


  ngOnInit() { //funcoes carregadas junto com a pagina
     this.carregarDados();
  }

  carregarDados(){
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.encontrarPorEmail(localUser.email)
      .subscribe(response => {
        this.cliente = response as ClienteDTO; //especifica que a response e um ClienteDTO
        this.getImageIfExists();
      },
      (error) => { //Nao esta funcionando, o Observable error foi descontinuado na versao atual do modulo rxjs
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

  getCameraPicture(){
    console.log("tirando foto...")
    this.cameraOn = true;
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.foto = 'data:image/png;base64,' + imageData;
     this.cameraOn = false;
    }, (err) => {
     // Handle error
    });
  }

  enviarFoto(){
    this.clienteService.uploadFoto(this.foto)
    .subscribe(resposta => {
      this.foto = null;
      this.carregarDados(); //recarrega a paniga novamente com a foto carregada
    },
    error => {
    });

  }

  cancelar(){
    this.foto = null;
  }

}
