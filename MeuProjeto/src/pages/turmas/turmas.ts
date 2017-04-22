import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GerenciadorTurma} from '../../providers/gerenciador-turma'
import {Turma} from '../../class/Turma'
/*
  Generated class for the Turmas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-turmas',
    templateUrl: 'turmas.html',
    providers: [GerenciadorTurma]
})
export class TurmasPage {
    private listaTurmas: Turma[];
    constructor(public navCtrl: NavController, public navParams: NavParams, public gerenciadorDeTurma: GerenciadorTurma) {
        this.listaTurmas = gerenciadorDeTurma.getTurmas();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TurmasPage');
    }

}
