import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Turma} from '../class/Turma';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
/*
  Generated class for the BDService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BDService {
    //private pathAluno: String;
    private pathTurma: String;

    constructor(public http: Http) {
        //this.pathAluno = "https://api.mlab.com/api/1/databases/helpteacher/aluno?apiKey=BYW9tuydSdGMLqEVKZ4slDdcd7RxyAVb";
        this.pathTurma = "https://api.mlab.com/api/1/databases/helpteacher/collections/turma?apiKey=BYW9tuydSdGMLqEVKZ4slDdcd7RxyAVb";
    }

    /*saveAluno(aluno: Aluno): Observable<Aluno[]>{
        let alunoJSON: any = {nome: aluno.getNome(), idade: aluno.getIdade()};
        return this.http.post(this.pathAluno.toString(), alunoJSON).map((res: Response) => res.json());
    }*/

    saveTurma(turma: Turma): Observable<Turma> {
        let turmaJSON: any = {
            nome: turma.getNome(),
            turno: turma.getTurno(),
            alunos: turma.getAlunos()
        }
        return this.http.post(this.pathTurma.toString(), turmaJSON)
            .map(dados => dados.json());
    }
    
    getTurmas(): Observable<Turma []>{
        return this.http.get(this.pathTurma.toString())
            .map(dados => dados.json());
    }
    
    

}
