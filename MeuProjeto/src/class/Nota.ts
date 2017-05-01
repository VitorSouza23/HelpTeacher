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
    
    getValor(): number{
        return this.valor;
    }
    
    setValor(valor: number): void{
        this.valor = valor;
    }
    
    getObservacao(): String{
        return this.observacao;
    }
    
    setObservacao(observacao: String): void{
        this.observacao = observacao;
    }
}
