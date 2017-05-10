import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Atividade} from '../../class/Atividade';
import {Turma} from '../../class/Turma';
import {Tarefa} from '../../class/Tarefa';
import {GerenciadorAtividades} from '../../providers/gerenciador-atividades';
import {GerenciadorTurma} from '../../providers/gerenciador-turma';

/*
  Generated class for the CriarAtividade page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-criar-atividade',
    templateUrl: 'criar-atividade.html'
})
export class CriarAtividadePage {
    private atividade: Atividade;
    private nome: String;
    private data: String;
    private descricao: String;
    private tarefas: Tarefa[];
    private turma: Turma;
    private listaTurmas: Turma[];

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private gerenciarDeAtividades: GerenciadorAtividades, private gerenciadorDeTurma: GerenciadorTurma) {
        this.nome = "";
        this.data = new Date().toISOString();
        this.descricao = "";
        this.tarefas = [];
        this.turma = null;
        this.listaTurmas = this.gerenciadorDeTurma.getTurmas();
    }
    
    confirmar(): void {
        this.atividade = new Atividade(this.nome, this.descricao, this.data);
        this.atividade.setTurma(this.turma);
        this.atividade.setTarefas(this.tarefas);
        this.gerenciarDeAtividades.addAtividade(this.atividade);
        this.navCtrl.pop();
    }
    
    cancelar(): void{
        this.navCtrl.pop();
    }



}
