import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {PaginaPrincipal} from '../pages/paginaPrincipal/paginaPrincipal';
import {Configuracoes} from '../pages/configuracoes/configuracoes';
import {TurmasPage} from '../pages/turmas/turmas';
import {CriarTurmaPage} from '../pages/criar-turma/criar-turma';
import {CriarAlunoPage} from '../pages/criar-aluno/criar-aluno';
import {GerenciadorTurma} from '../providers/gerenciador-turma';
import {GerenciadorProfessor} from '../providers/gerenciador-professor';

@NgModule({
    declarations: [
        MyApp,
        PaginaPrincipal,
        Configuracoes,
        TurmasPage,
        CriarTurmaPage,
        CriarAlunoPage
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
        CriarAlunoPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, GerenciadorTurma, GerenciadorProfessor]
})
export class AppModule {}
