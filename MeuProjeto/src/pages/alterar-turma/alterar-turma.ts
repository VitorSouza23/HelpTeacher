import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Turma} from '../../class/Turma'
import {Aluno} from '../../class/Aluno';
import {CriarAlunoPage} from '../criar-aluno/criar-aluno';
import {GerenciadorTurma} from '../../providers/gerenciador-turma';
import {AlterarAlunoPage} from '../alterar-aluno/alterar-aluno';
import {RemoverAlunosPage} from '../remover-alunos/remover-alunos';
import {BDService} from '../../providers/bd-service';


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

    constructor(public navCtrl: NavController, public navParams: NavParams, public gerenciadorDeTurma: GerenciadorTurma,
        private bancoDeDados: BDService) {
        this.turma = this.navParams.get('turma');
        this.nome = this.turma.getNome();
        this.turno = this.turma.getTurno();
    }

    ionViewDidLoad(): void {
        console.log('ionViewDidLoad AlterarTurmaPage');
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
        let index: number = this.gerenciadorDeTurma.getIndexTurma(this.turma);
        this.turma.setNome(this.nome);
        this.turma.setTurno(this.turno);
        this.bancoDeDados.updateTurma(this.turma).subscribe(turma => console.log(turma));
        this.gerenciadorDeTurma.updateTurma(this.turma, index);
        this.navCtrl.pop();
    }
    
    
    
    eventoPressionar(e): void{
        this.goToRemoverAlunos();
    }

    cancelar(): void {
        this.navCtrl.pop();
    }
}
