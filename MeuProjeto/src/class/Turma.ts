/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {DAOInterface} from '../interfaces/DAOInterface'
import {Aluno} from '../class/Aluno'

export class Turma extends DAOInterface{
    private nome: String;
    private alulos: Aluno[];

    constructor(nome: String) {
        super();
        this.setNome(nome);
    }
    
    public getNome() {
        return this.nome;
    }

    public setNome(nome: String) {
        this.nome = nome;
    }

    public getAlunos() {
        return this.alulos;
    }

    public setAlunos(alunos: Aluno[]) {
        this.alulos = alunos;
    }

    public addAluno(aluno: Aluno) {
        this.alulos.push(aluno);
    }

    public removeAluno(aluno: Aluno) {
        let index: number = this.alulos.indexOf(aluno);
        this.alulos.splice(index, 1);
    }

    public upadateAluno(index: number, novoAluno: Aluno) {
        this.alulos[index] = novoAluno;
    }

    public getAluno(index: number) {
        return this.alulos[index];
    }

}

