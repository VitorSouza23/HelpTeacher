/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {DAOInterface} from '../interfaces/DAOInterface';
import {Turma} from '../class/Turma';
import {Tarefa} from '../class/Tarefa';

export class Atividade extends DAOInterface {
    nome: String;
    descricao: String;
    taresfas: Tarefa[];
    data: Date;
    turma: Turma;

    constructor(nome: String, descricao: String, data: Date) {
        super();
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.taresfas = [];
        this.turma = null;
    }

    getNome(): String {
        return this.nome;
    }

    setNome(nome: String): void {
        this.nome = nome;
    }

    getDescricao(): String {
        return this.descricao;
    }

    setDescricao(descricao: String) {
        this.descricao = descricao;
    }

    getData(): Date {
        return this.data
    }

    setData(data: Date): void {
        this.data = data;
    }

    addTarefa(tarefa: Tarefa): void {
        this.taresfas.push(tarefa);
    }

    removeTarefa(tarefa: Tarefa): void {
        let index: number = this.taresfas.indexOf(tarefa);
        this.taresfas.splice(index, 1);
    }

    updateTarefa(novaTarefa: Tarefa, index: number): void {
        this.taresfas[index] = novaTarefa;
    }

    getTarefa(index: number): Tarefa {
        return this.taresfas[index];
    }

    getTarefas(): Tarefa[] {
        return this.taresfas;
    }
    
    setTarefas(tarefas: Tarefa[]): void {
        this.taresfas = tarefas;
    }
    
    setTurma(turma: Turma){
        this.turma = turma;
    }
    
    getTurma(): Turma {
        return this.turma;
    }
}