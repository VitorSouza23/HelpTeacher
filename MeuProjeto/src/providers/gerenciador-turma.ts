import {Injectable} from '@angular/core';
import {Turma} from '../class/Turma';
import {Aluno} from '../class/Aluno';
import 'rxjs/add/operator/map';

/*
  Generated class for the GerenciadorTurma provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GerenciadorTurma {
    private turmas: Turma[];
    constructor() {
        this.turmas = [];
    }

    public getTurmas() {
        return this.turmas;
    }

    public setTurmas(turmas: Turma[]) {
        this.turmas = turmas;
    }
    
    setAlunos(turma: Turma, alunos: Aluno[]){
        turma.setAlunos(alunos);
    }

    addTurma(turma: Turma) {
        this.turmas.push(turma);
    }

    addAluno(turma: Turma, aluno: Aluno) {
        turma.addAluno(aluno);
    }

    removeAluno(turma: Turma, aluno: Aluno) {
        turma.removeAluno(aluno);
    }

    updateAluno(turma: Turma, novoAluno: Aluno, indexAluno: number) {
        turma.upadateAluno(indexAluno, novoAluno);
    }

    getAluno(turma: Turma, indexAluno: number) {
        return turma.getAluno(indexAluno);
    }

    getTurma(index: number) {
        return this.turmas[index];
    }
    
    getIndexAluno(turma: Turma,aluno: Aluno){
        return turma.getAlunos().indexOf(aluno);
    }

}
