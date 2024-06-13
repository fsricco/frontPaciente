import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CadastrarComponent } from './components/cadastrar/cadastrar.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'cadastrar', component:  CadastrarComponent},
  { path: 'editar', component:  EditarComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
