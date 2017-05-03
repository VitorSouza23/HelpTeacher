import {Injectable} from '@angular/core';
import {Turma} from '../class/Turma';
import {Aluno} from '../class/Aluno';
import {FerramentaListaInterface} from '../interfaces/FerramentasListaInterface';
import 'rxjs/add/operator/map';
import {BDService} from '../providers/bd-service';


/*
  Generated class for the GerenciadorTurma provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GerenciadorTurma implements FerramentaListaInterface{
    private turmas: Turma[];
    constructor(public bancoDeDados: BDService) {
        this.turmas = [];
        this.recuperarTurmasDoBanco();
    }
    
   
    public getTurmas(): Turma[] {
        return this.turmas;
    }

    public setTurmas(turmas: Turma[]): void {
        this.turmas = turmas;
    }
    
    
    setAlunos(turma: Turma, alunos: Aluno[]): void{
        turma.setAlunos(alunos);
    }

    addTurma(turma: Turma): void {
        this.turmas.push(turma);
    }
    
    updateTurma(novaTurma: Turma, indexTurmaAntiga: number): void{
        this.turmas[indexTurmaAntiga] = novaTurma;
    }
    
    removeTurma(turma: Turma): void {
        let index: number = this.turmas.indexOf(turma);
        this.turmas.splice(index, 1);
    }

    addAluno(turma: Turma, aluno: Aluno): void {
        turma.addAluno(aluno);
        turma.ordernarAlfabeticamenteCrescente();
    }

    removeAluno(turma: Turma, aluno: Aluno): void {
        turma.removeAluno(aluno);
    }

    updateAluno(turma: Turma, novoAluno: Aluno, indexAluno: number): void {
        turma.upadateAluno(indexAluno, novoAluno);
    }

    getAluno(turma: Turma, indexAluno: number): Aluno {
        return turma.getAluno(indexAluno);
    }

    getTurma(index: number): Turma {
        return this.turmas[index];
    }
    
    getIndexAluno(turma: Turma,aluno: Aluno): number {
        return turma.getAlunos().indexOf(aluno);
    }
    
    getIndexTurma(turma:Turma): number {
        return this.turmas.indexOf(turma);
    }
    
    ordernarAlfabeticamenteCrescente(): void {
        this.turmas.sort((t1, t2) => {
            return t1.getNome() > t2.getNome()? 1:-1;
        })
    }
    
    private recuperarTurmasDoBanco(): void {
        this.bancoDeDados.getTurmas().subscribe(dados => {
            dados.forEach((turma) => {
                let aux: Turma;
                aux = new Turma(turma.nome, turma.turno);
                aux.setAlunos(turma.alunos);
                aux.setID(turma._id);
                this.turmas.push(aux);
            });
            console.log(this.turmas);
        });
    }
}
