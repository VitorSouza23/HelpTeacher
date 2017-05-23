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
        this.nome = nome;
        this.idade = idade;
        this.notas = [];
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
        this.notas.forEach((nota) => soma = parseFloat(soma.toString()) + parseFloat(nota.valor.toString()));
        if (this.notas.length == 0){
            return 0;
        }else{
            let media: number = soma / this.notas.length;
        return Math.round(media);
        }
        
    }

    alterarNota(novaNota: Nota, index: number): void {
        this.notas[index] = novaNota;
    }

    removerNota(index: number): void {
        this.notas.slice(index, 1);
    }
}

