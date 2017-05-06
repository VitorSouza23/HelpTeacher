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
    private nome: String;
    private data: Date;
    private descricao: String;
    private tarefas: Tarefa[];
    private turma: Turma;
    private listaTurmas: Turma[];

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private gerenciarDeAtividades: GerenciadorAtividades, private gerenciadorDeTurma: GerenciadorTurma) {
        this.nome = "";
        this.data = new Date(new Date(Date.now()).toISOString());
        this.descricao = "";
        this.tarefas = [];
        this.turma = null;
        this.listaTurmas = this.gerenciadorDeTurma.getTurmas();
    }



}
