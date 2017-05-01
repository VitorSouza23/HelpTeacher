import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Professor} from '../class/Professor'
/*
  Generated class for the GerenciadorProfessor provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GerenciadorProfessor {
    private professor: Professor;
    constructor() {
        this.professor = new Professor('Andréa','Ensino Fundamental','E.M.E.B Professor Trajno');
    }
  

    getProfessor(): Professor {
        return this.professor;
    }
    setProfessor(novoProfessor: Professor): void {
        this.professor = novoProfessor;
    }
}
