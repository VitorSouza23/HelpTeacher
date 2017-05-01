import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {GerenciadorTurma} from '../../providers/gerenciador-turma';
import {Turma} from '../../class/Turma';
/*
  Generated class for the RemoverTurmas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-remover-turmas',
    templateUrl: 'remover-turmas.html'
})
export class RemoverTurmasPage {
    private turmas: Turma[];
    private listaSelecao: any[];
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public gerenciadorDeTurmas: GerenciadorTurma) {
        this.turmas = this.gerenciadorDeTurmas.getTurmas();
        this.listaSelecao = [];
        this.turmas.forEach((turma) => this.listaSelecao.push({
            turma: turma,
            isSelected: false
        }))
    }
    
    remover(): void{
        this.listaSelecao.forEach((objeto) => {
            if(objeto.isSelected == true){
                this.gerenciadorDeTurmas.removeTurma(objeto.turma);
            }
        });
        this.navCtrl.pop();
    }
    
     cancelar(): void{
        this.navCtrl.pop();
    }

    ionViewDidLoad(): void {
        console.log('ionViewDidLoad RemoverTurmasPage');
    }

}
