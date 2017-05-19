import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
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

    addNota() {
        let alert = this.alertCtrl.create({
            title: 'Nota',
            inputs: [
                {
                    name: 'valor',
                    placeholder: 'Valor',
                    type: 'number'
                },
                {
                    name: 'observacao',
                    placeholder: 'Observação'
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
                        this.notas.push(new Nota(data.valor, data.observacao))
                    }
                }
            ]
        });
        alert.present();
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
