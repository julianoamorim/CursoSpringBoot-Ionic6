import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController, NavController, NavParams } from '@ionic/angular';
import { API_CONFIG } from 'src/config/api.config';
import { ProdutoDTO } from 'src/models/produto.dto';
import { ProdutoService } from 'src/services/domain/produto.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  providers: [NavParams] //tem q colocar para carregar a pagina
})
export class ProdutosPage implements OnInit {

  page: number =0;

  items: ProdutoDTO[] = [];
  loading: any;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public produtoService: ProdutoService,
    public activateRoute: ActivatedRoute,
    public router: Router,
    public route: ActivatedRoute,
    public loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.carregarDados();

    

  }

  carregarDados(){
    //Recebe os parametros de categoria.page para mostrar os produtos
    let categoria_id = this.activateRoute.snapshot.paramMap.get('data');
    this.showLoader();
    this.produtoService.encontrarPorCategoria(categoria_id, this.page, 10)  // busca os produtos de 10 em 10
    .subscribe(response => {
      let inicio = this.items.length;
      this.items = this.items.concat(response['content']); //carrega os dados da pagina anterior
      this.stopLoader() //retira a tela de loading apos carregar os dados da pagina anterior
      let fim = this.items.length - 1; //posicao final da lista
      this.carregarImagemUrls(inicio, fim);
      console.log(this.page)
      console.log(this.items)
    },
    error => {});
  }

  carregarImagemUrls(inicio: number, fim: number) {
    for (var i=inicio; i<fim; i++) {
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

  async showLoader(){ //metodo usado em requisicoes q podem demorar, gerando a tela de Loading...
    const loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...',
      duration: 500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

  stopLoader() { //metodo para parar a tela de loading... Normalmente usada apos o metodo de carregar componentes externos
    //nao esta funcionando perfeitamente no IONIC 5
  }


  doRefresh(event) { //metodo para animacao qdo a pagina estiver carregando
    this.page = 0;
    this.items = [];
    this.carregarDados();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  loadData(event) { //Metodo que carrega o infinit scroll
    this.page++; 
    this.carregarDados();
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  

}
