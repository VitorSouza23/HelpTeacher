import {Component} from '@angular/core';
import {GerenciadorProfessor} from '../../providers/gerenciador-professor'
import {NavController} from 'ionic-angular';


@Component({
    selector: 'page-page1',
    templateUrl: 'paginaPrincipal.html',
    providers: [GerenciadorProfessor]
})
export class PaginaPrincipal {
   professor: any;
    constructor(public navCtrl: NavController, public gerenciadorProfessor: GerenciadorProfessor) {
        this.professor = gerenciadorProfessor.novoProfessor('Andréa','Ensino Fundamental','E.M.E.B Professor Trajno');
    }

}
