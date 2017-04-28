import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Turma} from '../../class/Turma'
import {Aluno} from '../../class/Aluno';
import {CriarAlunoPage} from '../criar-aluno/criar-aluno';
import {GerenciadorTurma} from '../../providers/gerenciador-turma';
import {AlterarAlunoPage} from '../alterar-aluno/alterar-aluno';
import {RemoverAlunosPage} from '../remover-alunos/remover-alunos';

/*
  Generated class for the AlterarTurma page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-alterar-turma',
    templateUrl: 'alterar-turma.html'
})
export class AlterarTurmaPage {
    private turma: Turma;
    private nome: String
    private turno: String;

    constructor(public navCtrl: NavController, public navParams: NavParams, public gerenciadorDeTurma: GerenciadorTurma) {
        this.turma = this.navParams.get('turma');
        this.nome = this.turma.getNome();
        this.turno = this.turma.getTurno();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AlterarTurmaPage');
    }

    goToCriarAluno() {
        this.navCtrl.push(CriarAlunoPage, {
            turma: this.turma
        });
    }

    goToAlterarAluno(aluno: Aluno) {
        this.navCtrl.push(AlterarAlunoPage, {
            turma: this.turma,
            aluno: aluno
        })
    }

    goToRemoverAlunos() {
        this.navCtrl.push(RemoverAlunosPage, {
            turma: this.turma
        })
    }

    ordenarAlunosAlfabeticamente() {
        this.turma.ordernarAlfabeticamenteCrescente();
    }

    confirmar() {
        let index: number = this.gerenciadorDeTurma.getIndexTurma(this.turma);
        this.turma.setNome(this.nome);
        this.turma.setTurno(this.turno);
        this.gerenciadorDeTurma.updateTurma(this.turma, index);
        this.navCtrl.pop();
    }

    cancelar() {
        this.navCtrl.pop();
    }
}
