import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InboxComponent } from './components/inbox/inbox.component';
import { FolderPage } from './folder.page';


//nao consigo acessar as rotas por aqui(Fazer o LazyLoading). Por que?
const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'categorias',
    loadChildren: () => import('./components/categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
