/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {DAOInterface} from '../interfaces/DAOInterface'
import {Aluno} from '../class/Aluno'

export class Turma extends DAOInterface{
    private nome: String;
    private alunos: Aluno[];

    constructor(nome: String) {
        super();
        this.setNome(nome);
        this.alunos = [];
    }
    
    public getNome() {
        return this.nome;
    }

    public setNome(nome: String) {
        this.nome = nome;
    }

    public getAlunos() {
        return this.alunos;
    }

    public setAlunos(alunos: Aluno[]) {
        this.alunos = alunos;
    }

    public addAluno(aluno: Aluno) {
        this.alunos.push(aluno);
    }

    public removeAluno(aluno: Aluno) {
        let index: number = this.alunos.indexOf(aluno);
        this.alunos.splice(index, 1);
    }

    public upadateAluno(index: number, novoAluno: Aluno) {
        this.alunos[index] = novoAluno;
    }

    public getAluno(index: number) {
        return this.alunos[index];
    }

}

