import { CategoriaService } from './../services/categoria.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import {HttpClientModule} from '@angular/common/http' //nao importou automaticamente
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InboxModule } from './folder/components/inbox/inbox.module';
import { ErrorInterceptorProvider } from 'src/interceptors/error-interceptor';
import { AuthService } from 'src/services/auth.service';
import { StorageService } from 'src/services/storage.service';

@NgModule({
  declarations: [AppComponent], //nao e declarada todas as paginas -> LazyLoading
  entryComponents: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    InboxModule],
    
  //servicos que sao declarados globalmente  
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CategoriaService,
    ErrorInterceptorProvider,
    AuthService,
    StorageService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
