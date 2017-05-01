import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Turma} from '../../class/Turma'
import {Aluno} from '../../class/Aluno';
import {CriarAlunoPage} from '../criar-aluno/criar-aluno';
import {GerenciadorTurma} from '../../providers/gerenciador-turma';
import {AlterarAlunoPage} from '../alterar-aluno/alterar-aluno';
import {RemoverAlunosPage} from '../remover-alunos/remover-alunos';
import {BDService} from '../../providers/bd-service'
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
    private nome: String
    private turno: String;

    constructor(public navCtrl: NavController, public navParams: NavParams, public gerenciadorDeTurma: GerenciadorTurma,
        public bancoDeDados: BDService) {
        this.turma = new Turma("", "");
    }

    ionViewDidLoad(): void {
        console.log('ionViewDidLoad CriarTurmaPage');
    }

    goToCriarAluno(): void {
        this.navCtrl.push(CriarAlunoPage, {
            turma: this.turma
        });
    }

    goToAlterarAluno(aluno: Aluno): void {
        this.navCtrl.push(AlterarAlunoPage, {
            turma: this.turma,
            aluno: aluno
        })
    }

    goToRemoverAlunos(): void {
        this.navCtrl.push(RemoverAlunosPage, {
            turma: this.turma
        })
    }

    ordenarAlunosAlfabeticamente(): void {
        this.turma.ordernarAlfabeticamenteCrescente();
    }

    confirmar(): void {
        this.turma.setNome(this.nome);
        this.turma.setTurno(this.turno);
        this.bancoDeDados.saveTurma(this.turma).subscribe(turma => this.turma = turma);
        this.gerenciadorDeTurma.addTurma(this.turma);
        this.navCtrl.pop();
    }

    cancelar(): void {
        this.navCtrl.pop();
    }
}
