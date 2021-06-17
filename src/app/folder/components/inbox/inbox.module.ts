import { InboxComponent } from './inbox.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FolderPageRoutingModule } from '../../folder-routing.module';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      FolderPageRoutingModule
    ],
    declarations: [
      InboxComponent
    ]
  })

  export class InboxModule{}
