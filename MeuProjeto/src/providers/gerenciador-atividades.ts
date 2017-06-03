import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Atividade} from '../class/Atividade';
import {Tarefa} from '../class/Tarefa';
import {BDService} from './bd-service';
import {GerenciadorTurma} from './gerenciador-turma';
import * as moment from 'moment';
/*
  Generated class for the GerenciadorAtividades provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GerenciadorAtividades {
    atividades: Atividade[];
    
    constructor(private bancoDeDados: BDService, private gerenciadorTurma: GerenciadorTurma) {
        this.atividades = [];
         this.recuperarAtividadesDoBanco();
    }
    
    addAtividade(atividade: Atividade): void {
        this.atividades.push(atividade);
    }
    
    removeAtividade(atividade: Atividade): void {
        let index: number = this.atividades.indexOf(atividade);
        this.atividades.splice(index, 1);
    }
    
    updateAtividade(novaAtividade: Atividade, index: number): void {
        this.atividades[index] = novaAtividade; 
    }
    
    getAtividade(index: number): Atividade {
        return this.atividades[index];
    }
    
    getAtividades(): Atividade[] {
        return this.atividades;
    }
    
    setAtividades(atividades: Atividade[]){
        this.atividades = atividades;
    }
    
    indexOfAtividade(atividade: Atividade): number {
        return this.atividades.indexOf(atividade);
    }
    
    recuperarAtividadesDoBanco(): void {
        this.bancoDeDados.getAtividades().subscribe(dados => {
            dados.forEach((atividade) => {
                console.log(atividade);
                let aux: Atividade;
                aux = new Atividade(atividade.nome, atividade.descricao, atividade.data);
                atividade.tarefas.forEach((tarefa) => {
                    aux.taresfas.push(new Tarefa(tarefa.descricao, tarefa.cumprida));
                })
                aux.turma = this.gerenciadorTurma.getTurmaPorID(atividade.idTurma);
                aux._id = atividade._id;
                this.atividades.push(aux);
            });
            console.log(this.atividades); 
        });
    }
    
    ordenarAtividadesPorData(): void {
        this.atividades.sort((a1, a2) => {
            if (moment(a1.data).isAfter(moment(a2.data))){
                return 1;
            }else{
               return - 1;
            }
        })
    }

}
