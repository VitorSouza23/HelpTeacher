import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
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
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let turmaAux = {
            nome: turma.getNome(),
            turno: turma.getTurno(),
            alunos: turma.getAlunos()
        }
        return this.http.post(this.pathTurma.toString(), turmaAux, options)
            .map(dados => dados.json());
    }

    getTurmas(): Observable<Turma[]> {
        return this.http.get(this.pathTurma.toString())
            .map(dados => dados.json());
    }
    
    updateTurma(turma: Turma): Observable<Turma>{
        let id: String = '&q=' + JSON.stringify({_id: turma._id});
        console.log(this.pathTurma.toString() + id);
        let turmaAux = {
            nome: turma.getNome(),
            turno: turma.getTurno(),
            alunos: turma.getAlunos()
        }
        return this.http.put(this.pathTurma.toString() + id.toString(), turmaAux)
            .map(dados => dados.json());
    }
    
    removeTurma(turma: Turma): Observable<Turma>{
        let id: String = '&q=' + JSON.stringify({_id: turma._id});
        console.log(this.pathTurma.toString() + id);
        return this.http.put(this.pathTurma.toString() + id.toString(), [])
            .map(dados => dados.json());
    }





}
