/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {DAOInterface} from '../interfaces/DAOInterface'

export class Professor extends DAOInterface {
    nome: String;
    areaDeAtuacao: String;
    escola: String;

    constructor(nome: String, areaDeAtuacao: String, escola: String) {
        super();
        this.nome = nome;
        this.areaDeAtuacao = areaDeAtuacao;
        this.escola = escola;
    }

   
}


