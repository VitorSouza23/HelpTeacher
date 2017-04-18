import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';


@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {
    professor: any = {
            nome: 'Andréa',
            atuacao: 'Ensino Fundamental'
        };

    constructor(public navCtrl: NavController) {
    
    }

}
