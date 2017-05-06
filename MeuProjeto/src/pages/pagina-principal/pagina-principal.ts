import {Component} from '@angular/core';
import {GerenciadorProfessor} from '../../providers/gerenciador-professor';
import {TurmasPage} from '../turmas/turmas'
import {NavController} from 'ionic-angular';
import {Professor} from '../../class/Professor';
import {AtividadesPage} from '../atividades/atividades'


@Component({
    selector: 'page-principal',
    templateUrl: 'pagina-principal.html'
})
export class PaginaPrincipal {
    private professor: Professor;

    constructor(public navCtrl: NavController, public gerenciadorProfessor: GerenciadorProfessor) {
        this.professor = gerenciadorProfessor.getProfessor();
    }

    goToTurmasPage(): void {
        this.navCtrl.push(TurmasPage);
    }

    goToAtividadesPage(): void {
        this.navCtrl.push(AtividadesPage);
    }
}
