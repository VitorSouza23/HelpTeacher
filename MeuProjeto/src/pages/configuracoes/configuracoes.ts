import {Component} from '@angular/core';
import {NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import {GerenciadorProfessor} from '../../providers/gerenciador-professor';
import {Professor} from '../../class/Professor'

@Component({
    selector: 'page-configuracoes',
    templateUrl: 'configuracoes.html'
})
export class Configuracoes {
    private professor: Professor;
    private nome: String;
    private areaDeAtuacao: String;
    private escola: String;

    constructor(public navCtrl: NavController, public navParams: NavParams, public gerenciadorProfessor: GerenciadorProfessor,
        public toastCtrl: ToastController, private alertCtrl: AlertController) {
        try {
            this.professor = gerenciadorProfessor.getProfessor();
            this.nome = this.professor.nome;
            this.areaDeAtuacao = this.professor.areaDeAtuacao;
            this.escola = this.professor.escola;
        } catch (e) {
            this.alertCtrl.create({
                title: 'Ops!',
                message: 'Ocorreu um erro, mas já estamos consertando!...',
                buttons: [{
                    text: 'OK'
                }]
            }).present();
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }


    }

    confirmar(): void {
        this.professor.nome = this.nome;
        this.professor.areaDeAtuacao = this.areaDeAtuacao;
        this.professor.escola = this.escola;
        this.gerenciadorProfessor.setProfessor(this.professor);
        this.mostrarMensagemDeConfrimacao();
    }

    private mostrarMensagemDeConfrimacao(): void {
        this.toastCtrl.create({
            message: 'Dados atualizados com sucesso!',
            duration: 3000,
            position: 'middle'
        }).present();
    }
}
