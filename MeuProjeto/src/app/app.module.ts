import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {PaginaPrincipal} from '../pages/pagina-principal/pagina-principal';
import {Configuracoes} from '../pages/configuracoes/configuracoes';
import {TurmasPage} from '../pages/turmas/turmas';
import {CriarTurmaPage} from '../pages/criar-turma/criar-turma';
import {CriarAlunoPage} from '../pages/criar-aluno/criar-aluno';
import {GerenciadorTurma} from '../providers/gerenciador-turma';
import {GerenciadorProfessor} from '../providers/gerenciador-professor';
import {AlterarAlunoPage} from '../pages/alterar-aluno/alterar-aluno';
import {RemoverAlunosPage} from '../pages/remover-alunos/remover-alunos';
import {AlterarTurmaPage} from '../pages/alterar-turma/alterar-turma';
import {RemoverTurmasPage} from '../pages/remover-turmas/remover-turmas';

@NgModule({
    declarations: [
        MyApp,
        PaginaPrincipal,
        Configuracoes,
        TurmasPage,
        CriarTurmaPage,
        CriarAlunoPage,
        AlterarAlunoPage,
        RemoverAlunosPage,
        AlterarTurmaPage,
        RemoverTurmasPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        PaginaPrincipal,
        Configuracoes,
        TurmasPage,
        CriarTurmaPage,
        CriarAlunoPage,
        AlterarAlunoPage,
        RemoverAlunosPage,
        AlterarTurmaPage,
        RemoverTurmasPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GerenciadorTurma, GerenciadorProfessor]
})
export class AppModule {}
