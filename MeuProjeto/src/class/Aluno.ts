/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {DAOInterface} from '../interfaces/DAOInterface'
import {Nota} from '../class/Nota'

export class Aluno extends DAOInterface{
    private nome: String;
    private idade: number;
    private notas: Nota[];
    
    constructor(nome: String, idade: number) {
        super();
        this.setNome(nome);
        this.setIdade(idade);
        this.notas = [];
    }

    public getNome() {
        return this.nome;
    }

    public setNome(nome: String) {
        this.nome = nome;
    }

    public getIdade() {
        return this.idade
    }

    public setIdade(idade: number) {
        this.idade = idade;
    }

    public getNotas() {
        return this.notas;
    }

    public setNotas(notas: Nota[]) {
        this.notas = notas;
    }

    adicionarNota(nota: Nota) {
        this.notas.push(nota);
    }

    getNota(index: number) {
        return this.notas[index];
    }

    calcularMedia() {
        let soma: number = 0;
        this.notas.forEach((nota) => soma = soma + nota.getValor());
        let media: number = soma / this.notas.length;
        return Math.round(media);
    }

    alterarNota(index: number, novaNota: Nota) {
        this.notas[index] = novaNota;
    }

    removerNota(index: number) {
        this.notas.slice(index, 1);
    }
}

