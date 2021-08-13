import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, NavParams } from '@ionic/angular';
import { API_CONFIG } from 'src/config/api.config';
import { ProdutoDTO } from 'src/models/produto.dto';
import { ProdutoService } from 'src/services/domain/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  providers: [NavParams] //tem q colocar para carregar a pagina
})
export class ProdutosPage implements OnInit {

  items: ProdutoDTO[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public produtoService: ProdutoService,
    public activateRoute: ActivatedRoute,
    public router: Router,
    public route: ActivatedRoute,
    public loadingCtrl: LoadingController) { }

  ngOnInit() {

    //Recebe os parametros de categoria.page para mostrar os produtos
    let categoria_id = this.activateRoute.snapshot.paramMap.get('data');
    this.showLoader();
    console.log(this.produtoService.encontrarPorCategoria(categoria_id))
    this.produtoService.encontrarPorCategoria(categoria_id)
    .subscribe(response => {
      this.items = response['content']; //carrega os dados da pagina anterior
      this.stopLoader(); //retira a tela de loading apos carregar os dados da pagina anterior
      this.carregarImagemUrls();
    },
    error => {});

  }

  voltar(){
    this.navCtrl.navigateRoot('/folder/components/categorias');
  }

  carregarImagemUrls() {
    for (var i=0; i<this.items.length; i++) {
      let item = this.items[i];
      this.produtoService.getImagemPequenaBucked(item.id) //pega o id do produto e procura uma small-image com msm id
        .subscribe(response => {
          item.imageUrl = `${API_CONFIG.bucketAWSUrl}/prod${item.id}-small.jpg`;
        },
        error => {});
    }
  }
  
  mostrarDetalhe(produto_id: string){
    let data = JSON.stringify(produto_id);
    this.router.navigate(['../produto-detalhado',{data}],{relativeTo: this.route});
  }

  //metodo usado em requisicoes q podem demorar, gerando a tela de Loading...
  async  showLoader() {
    const loading = await this.loadingCtrl.create({
       message: 'Loading...',
    });
    await loading.present();
 }
 stopLoader() { //metodo para parar a tela de loading... Normalmente usada apos o metodo de carregar componentes externos
    this.loadingCtrl.dismiss()
    console.log('Dissmis Loading...')
 }
  

}
