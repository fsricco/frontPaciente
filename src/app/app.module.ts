import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { HomeComponent } from './components/home/home.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { EditarComponent } from './components/editar/editar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    HomeComponent,
    CadastrarComponent,
    EditarComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
