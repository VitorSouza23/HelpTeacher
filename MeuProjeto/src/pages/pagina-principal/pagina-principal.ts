import {Component} from '@angular/core';
import {GerenciadorProfessor} from '../../providers/gerenciador-professor';
import {TurmasPage} from '../turmas/turmas'
import {NavController, LoadingController} from 'ionic-angular';
import {Professor} from '../../class/Professor';
import {AtividadesPage} from '../atividades/atividades'


@Component({
    selector: 'page-principal',
    templateUrl: 'pagina-principal.html'
})
export class PaginaPrincipal {
    private professor: Professor;

    constructor(public navCtrl: NavController, public gerenciadorProfessor: GerenciadorProfessor,
        private loadingCtrl: LoadingController) {
        this.professor = new Professor("", "", "");
        setTimeout(() => this.professor = gerenciadorProfessor.getProfessor(), 1000);
        this.loadingCtrl.create({
            content: "Por favor aguarde...",
            duration: 3000
        }).present();

    }

    goToTurmasPage(): void {
        this.navCtrl.push(TurmasPage);
    }

    goToAtividadesPage(): void {
        this.navCtrl.push(AtividadesPage);
    }
}
