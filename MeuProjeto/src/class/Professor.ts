/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {DAOInterface} from '../interfaces/DAOInterface'

export class Professor extends DAOInterface {
    private nome: String;
    private areaDeAtuacao: String;
    private escola: String;

    constructor(nome: String, areaDeAtuacao: String, escola: String) {
        super();
        this.setNome(nome)
        this.setAreaDeAtuacao(areaDeAtuacao)
        this.setEscola(escola);
    }

    public getNome() {
        return this.nome;
    }

    public setNome(nome: String) {
        this.nome = nome;
    }

    public getAreaDeAtuacao() {
        return this.areaDeAtuacao;
    }

    public setAreaDeAtuacao(areaDeAtuacao: String) {
        this.areaDeAtuacao = areaDeAtuacao;
    }

    public getEscola() {
        return this.escola;
    }

    public setEscola(escola: String) {
        this.escola = escola;
    }
}


