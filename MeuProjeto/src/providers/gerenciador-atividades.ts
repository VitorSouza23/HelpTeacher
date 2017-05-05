import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Atividade} from '../class/Atividade';

/*
  Generated class for the GerenciadorAtividades provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GerenciadorAtividades {
    private atividades: Atividade[];
    
    constructor() {
        this.atividades = [];
    }
    
    addAtividade(atividade: Atividade): void {
        this.atividades.push(atividade);
    }
    
    removeAtividade(atividade: Atividade): void {
        let index: number = this.atividades.indexOf(atividade);
        this.atividades.splice(index, 1);
    }
    
    updateAtividade(novaAtividade: Atividade, index: number): void {
        this.atividades[index] = novaAtividade; 
    }
    
    getAtividade(index: number): Atividade {
        return this.atividades[index];
    }
    
    getAtividades(): Atividade[] {
        return this.atividades;
    }
    
    setAtividades(atividades: Atividade[]){
        this.atividades = atividades;
    }

}
