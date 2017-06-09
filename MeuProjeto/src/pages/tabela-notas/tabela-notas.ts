import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Turma} from '../../class/Turma';
import {Aluno} from '../../class/Aluno';
import {GeradorHtml} from '../../providers/gerador-html';
import {EmailComposer} from '@ionic-native/email-composer';
/*
  Generated class for the TabelaNotas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-tabela-notas',
    templateUrl: 'tabela-notas.html'

})
export class TabelaNotasPage {
    turma: Turma;
    nColunas: number[];

    constructor(public navCtrl: NavController, public navParams: NavParams,
        private geradorHtml: GeradorHtml,
        private emailComposer: EmailComposer) {
        this.turma = this.navParams.get('turma');
        this.nColunas = [];
        this.criarColunas();
    }

    criarColunas(): void {
        let max: number = 0;
        this.turma.alunos.forEach((aluno) => {
            if (aluno.notas.length > max) {
                max = aluno.notas.length
            }
        })

        for (let x = 1; x <= max; x++) {
            this.nColunas.push(x);
        }
    }

    getNotas(aluno: Aluno): String[] {
        let notas: String[] = [];
        for (let x = 0; x < this.nColunas.length; x++) {
            if (aluno.notas[x] != null) {
                notas.push(aluno.notas[x].valor.toString());
            } else {
                notas.push("");
            }
        }
        return notas;
    }

    enviarPorEmail(): void {
        this.emailComposer.isAvailable().then((available: boolean) => {
            if (available) {

            }
        });
        let email = {
            subject: 'Tabela de Notas da Turma: ' + this.turma.nome,
            body: this.geradorHtml.getStringNotas(this.turma).toString(),
            isHtml: false
        };

        this.emailComposer.open(email);
    }

}
