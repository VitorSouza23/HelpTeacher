import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, ItemSliding} from 'ionic-angular';
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
        private gerenciarDeAtividades: GerenciadorAtividades, private gerenciadorDeTurma: GerenciadorTurma,
        private alertCtrl: AlertController) {
        this.nome = "";
        this.data = new Date().toISOString();
        this.descricao = "";
        this.tarefas = [];
        this.turma = null;
        this.listaTurmas = this.gerenciadorDeTurma.getTurmas();
    }

    addTarefa() {
        this.alertCtrl.create({
            title: 'Nova Tarefa',
            message: 'Crie uma nova tarefa...',
            inputs: [{
                name: 'descricao',
                placeholder: "Descrição"
            }],
            buttons: [{
                text: 'Cancelar'
            },
            {
                text: 'Confirmar',
                handler: (data: any) => {this.tarefas.push(new Tarefa(data.descricao, false))}
            }]
        }).present();
    }

    updateTarefa(tarefa: Tarefa, itemSlid: ItemSliding): void {
        this.alertCtrl.create({
            title: 'Nova Tarefa',
            message: 'Crie uma nova tarefa...',
            inputs: [{
                name: 'descricao',
                placeholder: "Descrição",
                value: tarefa.descricao.toString()
            }],
            buttons: [{
                text: 'Cancelar'
            },
            {
                text: 'Confirmar',
                handler: (data: any) => {
                    let index: number = this.tarefas.indexOf(tarefa);
                    tarefa.descricao = data.descricao;
                    this.tarefas[index] = tarefa;
                }
            }]
        }).present();
        itemSlid.close();
    }
    
    removeTarefa(tarefa: Tarefa, itemSlid: ItemSliding): void {
        let index: number = this.tarefas.indexOf(tarefa);
        this.tarefas.splice(index, 1);
        itemSlid.close();
    }

    confirmar(): void {
        this.atividade = new Atividade(this.nome, this.descricao, this.data);
        this.atividade.turma = this.turma;
        this.atividade.setTarefas(this.tarefas);
        this.gerenciarDeAtividades.addAtividade(this.atividade);
        this.navCtrl.pop();
    }

    cancelar(): void {
        this.navCtrl.pop();
    }



}
