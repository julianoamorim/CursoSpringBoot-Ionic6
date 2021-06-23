import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./components/signup/signup.module').then( m => m.SignupPageModule)
  },  {
    path: 'produtos',
    loadChildren: () => import('./components/produtos/produtos.module').then( m => m.ProdutosPageModule)
  },
  {
    path: 'produto-detalhado',
    loadChildren: () => import('./components/produto-detalhado/produto-detalhado.module').then( m => m.ProdutoDetalhadoPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
