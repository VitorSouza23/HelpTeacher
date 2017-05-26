import {Component} from '@angular/core';
import {NavController, NavParams, LoadingController} from 'ionic-angular';
import {GerenciadorAtividades} from '../../providers/gerenciador-atividades';
import {Atividade} from '../../class/Atividade';
import {CriarAtividadePage} from '../criar-atividade/criar-atividade';
import {ControleAtividadePage} from '../controle-atividade/controle-atividade';
/*
  Generated class for the Atividades page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-atividades',
    templateUrl: 'atividades.html'
})
export class AtividadesPage {
    private atividades: Atividade[];
    
    constructor(public navCtrl: NavController, public navParams: NavParams, private gerenciadorDeAtividades: GerenciadorAtividades,
        private loadingCtrl: LoadingController) {
        this.atividades = this.gerenciadorDeAtividades.getAtividades();
         this.loadingCtrl.create({
            content: "Por favor aguarde...",
            duration: 3000
        }).present();
    }

    goToCriarAtividadePage(): void {
        this.navCtrl.push(CriarAtividadePage);
    }
    
    goToControleAtividade(atividade: Atividade): void {
        this.navCtrl.push(ControleAtividadePage, {
            atividade: atividade
        })
    }

}
