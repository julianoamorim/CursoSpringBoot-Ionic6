import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Perfil', url: '/folder/components/profile', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Logout', url: '/folder/components/home', icon: 'log-out'},
    { title: 'Categorias', url: '/folder/components/categorias', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(public auth: AuthService, public navCtrl: NavController) {}

  openPage(page: {title:string, url:string}){
    switch(page.title){
      case 'Logout':
        this.auth.logout();
        console.log('fazendo logout')
        //this.navCtrl.navigateRoot('/folder/components/home');
        break;
    }
  }
}

