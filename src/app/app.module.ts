import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BreadcrumbModule, BreadcrumbService} from 'xng-breadcrumb';

import {HeaderModule} from './features/header/header.module';
import {LogoModule} from './features/logo/logo.module';
import {NavModule} from './features/nav/nav.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BreadcrumbModule,

    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({maxAge: 25}),

    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,

    HeaderModule,
    LogoModule,
    NavModule,
  ],
  providers: [
    BreadcrumbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
