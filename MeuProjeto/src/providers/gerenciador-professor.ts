import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Professor} from '../class/Professor';
import {Storage} from '@ionic/storage';
/*
  Generated class for the GerenciadorProfessor provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GerenciadorProfessor {
    private professor: Professor;
    constructor(private storage: Storage) {
        //this.professor = new Professor('Andréa','Ensino Fundamental','E.M.E.B Professor Trajano');
        storage.get('professor').then((professor:Professor) =>{
            console.log(professor);
            if (professor != null){
                this.professor = professor;
            }else{
                this.professor = new Professor("", "", "");
            }
        })
    }
  

    getProfessor(): Professor {
        return this.professor;
    }
    setProfessor(novoProfessor: Professor): void {
        this.storage.set('professor', novoProfessor);
        this.professor = novoProfessor;
    }
}
