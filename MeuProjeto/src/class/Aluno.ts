/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class Aluno{
    nome: String;
    idade: number;
    notas: number[];
    constructor(nome: String, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
    
    adicionarNota(nota: number){
        this.notas.push(nota);
    }
    
    getNota(index: number){
        return this.notas[index];
    }
    
    calcularMedia(){
        let soma: number = 0;
        this.notas.forEach((nota) => soma = soma + nota);
        let media: number = soma / this.notas.length;
        return Math.round(media);
    }
    
    alterarNota(index: number, novaNota: number){
        this.notas[index] = novaNota;
    }
    
    removerNota(index: number){
        this.notas.slice(index, 1);
    }
}

