import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavComponent } from './components/nav/nav.component';
import { Demo1Component } from './components/demo/demo1/demo1.component';
import { Demo2Component } from './components/demo/demo2/demo2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Demo3Component } from './components/demo/demo3/demo3.component';
import { EurtobtcPipe } from './components/demo/demo3/eurtobtc.pipe';
import { Exo1Component } from './components/exos/exo1/exo1.component';
import { Demo4Component } from './components/demo/demo4/demo4.component';
import { Exo2Component } from './components/exos/exo2/exo2.component';
import { DemoComponent } from './components/demo/demo.component';
import { ExoComponent } from './components/exos/exo.component';
import { Demo5Component } from './components/demo/demo5/demo5.component';
import { Demo6Component } from './components/demo/demo6/demo6.component';
import { Demo7Component } from './components/demo/demo7/demo7.component';
import { Exo3Component } from './components/exos/exo3/exo3.component';
import { CreateGroupComponent } from './components/exos/exo3/create-group/create-group.component';
import { ModalComponent } from './components/modal/modal.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    EurtobtcPipe,
    Exo1Component,
    Demo4Component,
    Exo2Component,
    ExoComponent,
    Demo5Component,
    Demo6Component,
    Demo7Component,
    Exo3Component,
    CreateGroupComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    DialogModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
