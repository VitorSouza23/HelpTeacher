import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GerenciadorTurma} from '../../providers/gerenciador-turma';
import {Turma} from '../../class/Turma';
/*
  Generated class for the RemoverAlunos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-remover-alunos',
    templateUrl: 'remover-alunos.html'
})
export class RemoverAlunosPage {
    private turma: Turma;
    private listaSelecao: any[];

    constructor(public navCtrl: NavController, public navParams: NavParams, public gerenciadorTurma: GerenciadorTurma) {
        this.turma = this.navParams.get('turma');
        this.listaSelecao = [];
        this.turma.getAlunos().forEach((aluno) => this.listaSelecao.push({aluno: aluno, isSelected: false}));
    }

    remover() {
        this.listaSelecao.forEach((objeto) => {
            if (objeto.isSelected == true) {
                this.gerenciadorTurma.removeAluno(this.turma, objeto.aluno);
            }
        });
        this.navCtrl.pop();
    }
    
    cancelar(){
        this.navCtrl.pop();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RemoverAlunosPage');
    }

}
