import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Turma} from '../../class/Turma';
import {Aluno} from '../../class/Aluno';
import {DarNotaPage} from '../dar-nota/dar-nota';
import {BDService} from '../../providers/bd-service';
/*
  Generated class for the Notas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-notas',
    templateUrl: 'notas.html'
})
export class NotasPage {
    turma: Turma;
    alunos: Aluno[];
    
    constructor(public navCtrl: NavController, public navParams: NavParams, private bancoDeDados: BDService) {
        this.turma = this.navParams.get('turma');
        console.log(this.turma);
        this.alunos = this.turma.alunos;
    }

    goToDarNota(aluno: Aluno): void {
        this.navCtrl.push(DarNotaPage, {
            aluno: aluno,
            turma: this.turma
        })
    }
    
    confirmar(): void {
        this.bancoDeDados.updateTurma(this.turma).subscribe(turma => console.log(turma));
        this.navCtrl.pop();
    }
    calcelar(): void {
        this.navCtrl.pop();
    }

}
