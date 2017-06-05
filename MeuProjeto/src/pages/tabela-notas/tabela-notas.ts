import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Turma} from '../../class/Turma';
import {Aluno} from '../../class/Aluno';
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
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.turma = this.navParams.get('turma');
        this.nColunas = [];
        this.criarColunas();
    }

    criarColunas(): void {
        let max: number = 0;
        this.turma.alunos.forEach((aluno) =>{
            if (aluno.notas.length > max){
                max = aluno.notas.length
            }
        })
        
        for(let x = 1; x <= max; x++){
            this.nColunas.push(x);
        }
    }
    
    getNotas(aluno: Aluno): String[]{
        let notas: String[] = [];
        for (let x = 0; x < this.nColunas.length; x++){
            if (aluno.notas[x] != null){
                notas.push(aluno.notas[x].valor.toString());
            }else{
                notas.push("");
            }
        }
        return notas;
    }

}
