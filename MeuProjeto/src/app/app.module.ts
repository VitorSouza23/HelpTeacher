import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {PaginaPrincipal} from '../pages/paginaPrincipal/paginaPrincipal';
import {Configuracoes} from '../pages/configuracoes/configuracoes';
import {TurmasPage} from '../pages/turmas/turmas'

@NgModule({
    declarations: [
        MyApp,
        PaginaPrincipal,
        Configuracoes,
        TurmasPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        PaginaPrincipal,
        Configuracoes,
        TurmasPage
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
