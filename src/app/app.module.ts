import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule as SharedModule } from "./shared/shared.module";
import { ButtonModule } from 'primeng/button';

// CONFIGURACIÓN DEL LOCALE DE LA APP
import localeEsCL from '@angular/common/locales/es-CL';
import localeFrCa from '@angular/common/locales/fr-CA';

// ESTABLECER IDIOMA
import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsCL );
registerLocaleData( localeFrCa);

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
      {provide: LOCALE_ID, useValue: 'es-CL'}
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        ButtonModule
    ]
})
export class AppModule { }
