import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from './folder-routing.module';
import { FolderPage } from './folder.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FolderPageRoutingModule
  ],
  declarations: [
    FolderPage
  ]
})
export class FolderPageModule {}
