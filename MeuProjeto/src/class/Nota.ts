/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

export class Nota{
    private valor: number;
    private observacao: String;
    contructor(valor: number, observacao: String){
        this.valor = valor;
        this.observacao = observacao;
    }
    
    getValor(){
        return this.valor;
    }
    
    setValor(valor: number){
        this.valor = valor;
    }
    
    getObservacao(){
        return this.observacao;
    }
    
    setObservacao(observacao: String){
        this.observacao = observacao;
    }
}
