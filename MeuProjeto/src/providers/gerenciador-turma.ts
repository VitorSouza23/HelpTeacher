import {Injectable} from '@angular/core';
import {Turma} from '../class/Turma';
import {Aluno} from '../class/Aluno';
import {FerramentaListaInterface} from '../interfaces/FerramentasListaInterface'
import 'rxjs/add/operator/map';

/*
  Generated class for the GerenciadorTurma provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GerenciadorTurma implements FerramentaListaInterface{
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
    
    updateTurma(novaTurma: Turma, indexTurmaAntiga: number){
        this.turmas[indexTurmaAntiga] = novaTurma;
    }
    
    removeTurma(turma: Turma){
        let index: number = this.turmas.indexOf(turma);
        this.turmas.splice(index, 1);
    }

    addAluno(turma: Turma, aluno: Aluno) {
        turma.addAluno(aluno);
        turma.ordernarAlfabeticamenteCrescente();
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
    
    getIndexTurma(turma:Turma){
        return this.turmas.indexOf(turma);
    }
    
    ordernarAlfabeticamenteCrescente(){
        this.turmas.sort((t1, t2) => {
            return t1.getNome() > t2.getNome()? 1:-1;
        })
    }
}
