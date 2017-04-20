import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {PaginaPrincipal} from '../pages/paginaPrincipal/paginaPrincipal';
import {Configuracoes} from '../pages/configuracoes/configuracoes';

@NgModule({
    declarations: [
        MyApp,
        PaginaPrincipal,
        Configuracoes
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        PaginaPrincipal,
        Configuracoes
    ],
    providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
