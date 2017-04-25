import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Turma} from '../../class/Turma'
import {Aluno} from '../../class/Aluno';
import {CriarAlunoPage} from '../criar-aluno/criar-aluno';
import {GerenciadorTurma} from '../../providers/gerenciador-turma'
/*
  Generated class for the CriarTurma page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-criar-turma',
    templateUrl: 'criar-turma.html'
})
export class CriarTurmaPage {
    private turma: Turma;
    private nome: String;
    constructor(public navCtrl: NavController, public navParams: NavParams, public gerneciadorDeTurma: GerenciadorTurma) {
        this.turma = new Turma("");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CriarTurmaPage');
    }

    goToCriarAluno(){
        this.navCtrl.push(CriarAlunoPage, {
            turma: this.turma
        });
    }
    
    confirmar(){
        this.turma.setNome(this.nome);
        this.gerneciadorDeTurma.addTurma(this.turma);
        this.navCtrl.pop();
    }
}