import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GerenciadorTurma} from '../../providers/gerenciador-turma';
import {Turma} from '../../class/Turma';
import {CriarTurmaPage} from '../../pages/criar-turma/criar-turma';
import {AlterarTurmaPage} from '../alterar-turma/alterar-turma';
import {RemoverTurmasPage} from '../remover-turmas/remover-turmas';
import {BDService} from '../../providers/bd-service'
/*
  Generated class for the Turmas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-turmas',
    templateUrl: 'turmas.html',
})
export class TurmasPage {
    private listaTurmas: Turma[];
    constructor(public navCtrl: NavController, public navParams: NavParams, public gerenciadorDeTurma: GerenciadorTurma,
        public bancoDeDados: BDService) {
        this.listaTurmas = gerenciadorDeTurma.getTurmas();
    }

    ionViewDidLoad(): void {
        console.log('ionViewDidLoad TurmasPage');
    }

    goToCriarTurma(): void {
        this.navCtrl.push(CriarTurmaPage);
    }

    goToAlterarTurma(turma: Turma): void {
        this.navCtrl.push(AlterarTurmaPage, {
            turma: turma
        });
    }

    goToRemoverTurmas(): void {
        this.navCtrl.push(RemoverTurmasPage);
    }

    ordenarAlfabeticamenteTurmas(): void {
        this.gerenciadorDeTurma.ordernarAlfabeticamenteCrescente();
    }
    
    eventoPressionar(e): void{
        this.goToRemoverTurmas();
    }

    verTurma(): void {
        console.log(this.gerenciadorDeTurma.getTurmas());
    }
}
