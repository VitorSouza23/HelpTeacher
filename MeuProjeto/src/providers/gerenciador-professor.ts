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
    professor: Professor;
    constructor() {

    }
    novoProfessor(nome: String, arearDeAtuacao: String, escola: String) {
        this.professor = new Professor(nome, arearDeAtuacao, escola);
        return this.professor;
    }

    getProfessor() {
        return this.professor;
    }
    setProfessor(novoProfessor: Professor) {
        this.professor = novoProfessor;
    }
}
