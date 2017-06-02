import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Aluno} from '../../class/Aluno';
import {GerenciadorTurma} from '../../providers/gerenciador-turma';
import {Turma} from '../../class/Turma';
import {DarNotaPage} from '../dar-nota/dar-nota';
/*
  Generated class for the AlterarAluno page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-alterar-aluno',
    templateUrl: 'alterar-aluno.html'
})
export class AlterarAlunoPage {
    private aluno: Aluno;
    private nome: String;
    private idade: number;
    private turma: Turma;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public gerenciadorTurmas: GerenciadorTurma) {
         this.turma = this.navParams.get('turma');
         this.aluno = this.navParams.get('aluno');
         this.nome = this.aluno.nome;
         this.idade = this.aluno.idade;
    }
    
    alterarAluno(): void{
        let index = this.gerenciadorTurmas.getIndexAluno(this.turma, this.aluno);
        this.aluno.nome = this.nome;
        this.aluno.idade = this.idade;
        this.gerenciadorTurmas.updateAluno(this.turma, this.aluno, index);
        this.navCtrl.pop();
    }
    
    cancelar(): void{
        this.navCtrl.pop();
    }
    
    goToDarNotas(): void {
        this.navCtrl.push(DarNotaPage, {
            aluno: this.aluno,
            turma: this.turma
        })
    }

    ionViewDidLoad(): void {
        console.log('ionViewDidLoad AlterarAlunoPage');
    }

}
