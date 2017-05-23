import {Component} from '@angular/core';
import {NavController, NavParams, AlertController, ItemSliding} from 'ionic-angular';
import {Aluno} from '../../class/Aluno';
import {Nota} from '../../class/Nota';
import {Turma} from '../../class/Turma';
import {GerenciadorTurma} from '../../providers/gerenciador-turma';
/*
  Generated class for the DarNota page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-dar-nota',
    templateUrl: 'dar-nota.html'
})
export class DarNotaPage {
    aluno: Aluno;
    notas: Nota[];
    turma: Turma;
    constructor(public navCtrl: NavController, public navParams: NavParams,
        private alertCtrl: AlertController, private gerenciadorTurma: GerenciadorTurma) {
        this.aluno = this.navParams.get('aluno');
        this.turma = this.navParams.get('turma');
        this.notas = this.aluno.notas;
    }
    
    private openAlert(nota: Nota, nova: boolean){
        let alert = this.alertCtrl.create({
            title: 'Nota',
            inputs: [
                {
                    name: 'valor',
                    placeholder: 'Valor',
                    type: 'number',
                    value: nota.valor.toString()
                    
                },
                {
                    name: 'observacao',
                    placeholder: 'Observação',
                    value: nota.observacao.toString()
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: data => {

                    }
                },
                {
                    text: 'Confirmar',
                    handler: data => {
                        nota.valor = data.valor;
                        nota.observacao = data.observacao;
                        if(nova == true){
                            this.notas.push(nota);
                        }
                    }
                }
            ]
        });
        alert.present();
    }

    addNota() {
        let novaNota: Nota = new Nota(7, "");
        this.openAlert(novaNota, true);
    }
    
    updateNota(nota: Nota, itemSliding: ItemSliding): void {
        this.openAlert(nota, false);
        itemSliding.close();
    }
    
    removeNota(nota: Nota, itemSliding: ItemSliding): void {
        let index: number = this.notas.indexOf(nota);
        this.notas.splice(index, 1);
        itemSliding.close();
    }

    confirmar(): void {
        this.aluno.notas = this.notas;
        let index: number = this.gerenciadorTurma.getIndexAluno(this.turma, this.aluno);
        this.gerenciadorTurma.updateAluno(this.turma, this.aluno, index);
        this.navCtrl.pop();
    }
    
    cancelar(): void {
        this.navCtrl.pop();
    }
}
