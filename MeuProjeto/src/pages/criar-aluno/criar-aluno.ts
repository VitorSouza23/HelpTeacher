import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Aluno} from '../../class/Aluno';
import {GerenciadorTurma} from '../../providers/gerenciador-turma';
import {Turma} from '../../class/Turma';

/*
  Generated class for the CriarAluno page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-criar-aluno',
    templateUrl: 'criar-aluno.html'
})
export class CriarAlunoPage {
    private aluno: Aluno;
    private nome: String;
    private idade: number;
    private turma: Turma;
    constructor(public navCtrl: NavController, public navParams: NavParams, public gerenciadorTurmas: GerenciadorTurma) {
        this.turma = this.navParams.get('turma');
        console.log(this.turma);
    }
    
    criarAluno(): void{
        this.aluno = new Aluno(this.nome, this.idade);
        this.gerenciadorTurmas.addAluno(this.turma, this.aluno);
        this.navCtrl.pop();
    }
    
    cancelar(): void{
        this.navCtrl.pop();
    }

    ionViewDidLoad(): void {
        console.log('ionViewDidLoad CriarAlunoPage');
    }

}
