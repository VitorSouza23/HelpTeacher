/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 
 export class Tarefa{
     descricao: String;
     cumprida: boolean;
     
     constructor(descricao: String, cumprida: boolean){
         this.descricao = descricao;
         this.cumprida = cumprida;
     }
     
     getDescricao(): String{
         return this.descricao;
     }
     
     setDescricao(descricao: String): void {
         this.descricao = descricao;
     }
     
     isCumprida(): boolean {
         return this.cumprida;
     }
     
     setCumprida(cumprida: boolean): void {
         this.cumprida = cumprida;
     }
 }


