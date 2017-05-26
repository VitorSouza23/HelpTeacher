import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Turma} from '../class/Turma';
import {Atividade} from '../class/Atividade';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
/*
  Generated class for the BDService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BDService {
    
    private pathTurma: String;
    private pathAtividade: String;

    constructor(public http: Http) {
        this.pathTurma = "https://api.mlab.com/api/1/databases/helpteacher/collections/turma?apiKey=BYW9tuydSdGMLqEVKZ4slDdcd7RxyAVb";
        this.pathAtividade = "https://api.mlab.com/api/1/databases/helpteacher/collections/atividade?apiKey=BYW9tuydSdGMLqEVKZ4slDdcd7RxyAVb"
    }


    saveTurma(turma: Turma): Observable<Turma> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let turmaAux = {
            nome: turma.nome,
            turno: turma.turno,
            alunos: turma.alunos
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
    
    getTurma(idTurma: any): Observable<Turma>{
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let id: String = '&q=' + JSON.stringify({_id: idTurma});
        console.log(this.pathTurma.toString() + id);
        return this.http.get(this.pathTurma.toString() + id.toString(), options)
            .map(dados => dados.json());
    }
    
    saveAtividade(atividade: Atividade): Observable<Atividade> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let atividadeAux: any = {
            nome: atividade.nome,
            descricao: atividade.descricao,
            data: atividade.data,
            tarefas: atividade.taresfas,
            idTurma: atividade.turma._id
        }
        
        return this.http.post(this.pathAtividade.toString(), atividadeAux, options)
            .map(dados => dados.json());
    }
    
    getAtividades(): Observable<any[]>{
        return this.http.get(this.pathAtividade.toString())
            .map(dados => dados.json());
    }
    
    updateAtividade(atividade: Atividade): Observable<any>{
        let id: String = '&q=' + JSON.stringify({_id: atividade._id});
        console.log(this.pathTurma.toString() + id);
        let atividadeAux: any = {
            nome: atividade.nome,
            descricao: atividade.descricao,
            data: atividade.data,
            tarefas: atividade.taresfas,
            idTurma: atividade.turma._id
        }
        return this.http.put(this.pathAtividade.toString() + id.toString(), atividadeAux)
            .map(dados => dados.json());
    }





}
