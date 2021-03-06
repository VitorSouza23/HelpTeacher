import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {PaginaPrincipal} from '../pages/pagina-principal/pagina-principal';
import {Configuracoes} from '../pages/configuracoes/configuracoes';
import {GerenciadorTurma} from '../providers/gerenciador-turma';
import * as moment from 'moment';



@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = PaginaPrincipal;

    pages: Array<{title: string, component: any}>;

    constructor(public platform: Platform, public gerenciadorDeTurmas: GerenciadorTurma) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Menu Principal', component: PaginaPrincipal},
            {title: 'Configurações', component: Configuracoes}
        ];
        moment.updateLocale('en', {
            weekdays : ['Domingo', 'Segunda-feria', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
        })
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    
}
