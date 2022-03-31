import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DimensionComponent } from './components/maestros/dimension/dimension.component';
import { PanelNavbarComponent } from './components/panel-navbar/panel-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DimensionComponent,
    PanelNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    MenuModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    MenubarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
