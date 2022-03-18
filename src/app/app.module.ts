import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BreadcrumbModule, BreadcrumbService} from 'xng-breadcrumb';

import {HeaderModule} from './shared/header/header.module';
import {LogoModule} from './shared/logo/logo.module';
import {NavModule} from './shared/nav/nav.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {RoutingService} from './services/routing.service';

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
    BreadcrumbService,
    RoutingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
