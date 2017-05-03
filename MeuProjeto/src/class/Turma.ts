/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {DAOInterface} from '../interfaces/DAOInterface';
import {Aluno} from '../class/Aluno';
import {FerramentaListaInterface} from '../interfaces/FerramentasListaInterface';

export class Turma extends DAOInterface implements FerramentaListaInterface {
    nome: String;
    turno: String;
    alunos: Aluno[];

    constructor(nome: String, turno: String) {
        super();
        this.setNome(nome);
        this.alunos = [];
        this.turno = turno;
    }

    getNome(): String {
        return this.nome;
    }

    setNome(nome: String): void {
        this.nome = nome;
    }

    getTurno(): String {
        return this.turno;
    }

    setTurno(turno: String): void {
        this.turno = turno;
    }

    getAlunos(): Aluno[] {
        return this.alunos;
    }

    setAlunos(alunos: Aluno[]): void {
        this.alunos = alunos;
    }

    addAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
    }

    removeAluno(aluno: Aluno): void {
        let index: number = this.alunos.indexOf(aluno);
        this.alunos.splice(index, 1);
    }

    upadateAluno(index: number, novoAluno: Aluno): void {
        this.alunos[index] = novoAluno;
    }

    getAluno(index: number): Aluno {
        return this.alunos[index];
    }

    ordernarAlfabeticamenteCrescente(): void {
        this.alunos.sort((a1, a2) => {
            return a1.getNome() > a2.getNome() ? 1 : -1;
        });
    }
}

