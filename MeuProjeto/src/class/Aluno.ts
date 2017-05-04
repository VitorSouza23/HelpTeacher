/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Nota} from '../class/Nota'

export class Aluno{
    nome: String;
    idade: number;
    notas: Nota[];
    
    constructor(nome: String, idade: number) {
        this.setNome(nome);
        this.setIdade(idade);
        this.notas = [];
    }

    public getNome(): String {
        return this.nome;
    }

    public setNome(nome: String): void {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }

    public getNotas(): Nota[] {
        return this.notas;
    }

    public setNotas(notas: Nota[]): void {
        let auxNota: Nota;
        notas.forEach((nota) => {
            auxNota = new Nota(nota.valor, nota.observacao);
            this.adicionarNota(auxNota);
        });
    }

    adicionarNota(nota: Nota): void {
        this.notas.push(nota);
    }

    getNota(index: number): Nota {
        return this.notas[index];
    }

    calcularMedia(): number {
        let soma: number = 0;
        this.notas.forEach((nota) => soma = soma + nota.getValor());
        let media: number = soma / this.notas.length;
        return Math.round(media);
    }

    alterarNota(index: number, novaNota: Nota): void {
        this.notas[index] = novaNota;
    }

    removerNota(index: number): void {
        this.notas.slice(index, 1);
    }
}

