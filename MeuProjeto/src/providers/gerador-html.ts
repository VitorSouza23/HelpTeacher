import {Injectable} from '@angular/core';
import {Turma} from '../class/Turma';
import {Aluno} from '../class/Aluno';
import 'rxjs/add/operator/map';

/*
  Generated class for the GeradorHtml provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GeradorHtml {

    private nColunas: number[];
    constructor() {
        this.nColunas = [];
    }

    gerarTabelaHtmlNotas(turma: Turma): String {
        this.gerarColunasNotas(turma);
        let stringHtml: String = "<html><body><table>"
            + "<tr>"
            + "<th> Alunos/Notas </th>";

        this.nColunas.forEach(n => {
            stringHtml += "<th> Nota " + n + "</th>";
        });

        stringHtml += "<th> Média </th>";
        stringHtml += "</tr>"
            + "<tr>";
        turma.alunos.forEach(aluno => {
            stringHtml += "<td>" + aluno.nome + "</td>";
            this.getNotas(aluno).forEach(nota => {
                stringHtml += "<td>" + nota + "</td> ";
            });
            stringHtml += "<td>" + aluno.calcularMedia() + "</td>"
        });
        stringHtml += "</tr>"
            + "</table></body></html>";
        return stringHtml;
    }

    private gerarColunasNotas(turma: Turma): void {
        let max: number = 0;
        turma.alunos.forEach((aluno) => {
            if (aluno.notas.length > max) {
                max = aluno.notas.length
            }
        })

        for (let x = 1; x <= max; x++) {
            this.nColunas.push(x);
        }
    }

    private getNotas(aluno: Aluno): String[] {
        let notas: String[] = [];
        for (let x = 0; x < this.nColunas.length; x++) {
            if (aluno.notas[x] != null) {
                notas.push(aluno.notas[x].valor.toString());
            } else {
                notas.push("");
            }
        }
        return notas;
    }
    
    getStringNotas(turma: Turma): String {
        let texto: String = "Notas da Turma: " + turma.nome + "\n\n";
        turma.alunos.forEach(aluno => {
            texto += "Nome: " + aluno.nome + "\n";
            for (let x = 0; x < aluno.notas.length; x++){
                texto += "Nota " + x + ": " + aluno.notas[x].valor + "\n";
            }
            texto += "Média: " + aluno.calcularMedia() + "\n\n";
        });
        return texto;
        
    }
}
