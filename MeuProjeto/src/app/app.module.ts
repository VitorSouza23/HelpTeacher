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
import {BDService} from '../providers/bd-service';
import {GerenciadorAtividades} from '../providers/gerenciador-atividades';
import {AtividadesPage} from '../pages/atividades/atividades';
import {CriarAtividadePage} from '../pages/criar-atividade/criar-atividade';
import {ControleAtividadePage} from '../pages/controle-atividade/controle-atividade';
import {NotasPage} from '../pages/notas/notas';
import {DarNotaPage} from '../pages/dar-nota/dar-nota';
import {Storage} from '@ionic/storage';
import {RemoverAtividadesPage} from '../pages/remover-atividades/remover-atividades';
import {TabelaNotasPage} from '../pages/tabela-notas/tabela-notas';

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
        RemoverTurmasPage,
        AtividadesPage,
        CriarAtividadePage,
        ControleAtividadePage,
        NotasPage,
        DarNotaPage,
        RemoverAtividadesPage,
        TabelaNotasPage
    ],
    imports: [
        IonicModule.forRoot(MyApp, {
            dayNames: ['Domingo', 'Segunda-feria', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
        }),

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
        RemoverTurmasPage,
        AtividadesPage,
        CriarAtividadePage,
        ControleAtividadePage,
        NotasPage,
        DarNotaPage,
        RemoverAtividadesPage,
        TabelaNotasPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        GerenciadorTurma,
        GerenciadorProfessor,
        BDService,
        GerenciadorAtividades,
        Storage
    ]
})
export class AppModule {}
