import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GerenciadorAtividades} from '../../providers/gerenciador-atividades';
import {Atividade} from '../../class/Atividade';
import {BDService} from '../../providers/bd-service';
/*
  Generated class for the RemoverAtividades page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-remover-atividades',
    templateUrl: 'remover-atividades.html'
})
export class RemoverAtividadesPage {
    atividades: Atividade[];
    listaSelecao: any[];
    constructor(public navCtrl: NavController, public navParams: NavParams,
        private gerenciadorAtividades: GerenciadorAtividades,
        private bancoDeDados: BDService) {
        this.atividades = this.gerenciadorAtividades.atividades;
        this.listaSelecao = [];
        this.atividades.forEach(atividade => {
            this.listaSelecao.push({
                atividade: atividade,
                isSelected: false
            });
        });
    }

   remover(): void {
       this.listaSelecao.forEach(objeto =>{
           if(objeto.isSelected == true){
               this.bancoDeDados.removeAtividade(objeto.atividade).subscribe(atividade => console.log(atividade));
               this.gerenciadorAtividades.removeAtividade(objeto.atividade);
           }
       });
       this.navCtrl.pop();
   }

    cancelar(): void {
        this.navCtrl.pop();
    }
}
