/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {DAOInterface} from '../interfaces/DAOInterface';
import {Aluno} from '../class/Aluno';
import {FerramentaListaInterface} from '../interfaces/FerramentasListaInterface';

export class Turma extends DAOInterface implements FerramentaListaInterface{
    private nome: String;
    private turno: String;
    private alunos: Aluno[];

    constructor(nome: String, turno: String) {
        super();
        this.setNome(nome);
        this.alunos = [];
        this.turno = turno;
    }
    
    getNome() {
        return this.nome;
    }

    setNome(nome: String) {
        this.nome = nome;
    }
    
    getTurno(){
        return this.turno;
    }
    
    setTurno(turno: String){
        this.turno = turno;
    }

    getAlunos() {
        return this.alunos;
    }

    setAlunos(alunos: Aluno[]) {
        this.alunos = alunos;
    }

    addAluno(aluno: Aluno) {
        this.alunos.push(aluno);
    }

    removeAluno(aluno: Aluno) {
        let index: number = this.alunos.indexOf(aluno);
        this.alunos.splice(index, 1);
    }

    upadateAluno(index: number, novoAluno: Aluno) {
        this.alunos[index] = novoAluno;
    }

    getAluno(index: number) {
        return this.alunos[index];
    }

    ordernarAlfabeticamenteCrescente(){
        this.alunos.sort((a1,a2) => {
            return a1.getNome() > a2.getNome()? 1 : -1;
        });
    }
}

