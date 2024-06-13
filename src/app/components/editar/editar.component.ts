import { Component } from '@angular/core';
import Paciente from '../../../models/paciente';
import { NgForm } from '@angular/forms';
import { PacienteService } from '../../services/paciente.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent {
  
  searchText: String = '';
  nome: String = '';
  planoSaude: String = '';
  idade?: Number;
  
  constructor(private pacienteService: PacienteService) {  }

  search() {
    let paciente = this.pacienteService.getPacienteById(this.searchText).subscribe((paciente: Paciente) => {
      this.nome = paciente.nome;
      this.planoSaude = paciente.planoSaude;
      this.idade = paciente.idade;
    });
  }


  editar(myForm: NgForm) {
    if (myForm.invalid) {
      return;
    }

    let paciente: Paciente = {
      _id: this.searchText,
      nome: this.nome,
      planoSaude: this.planoSaude,
      idade: this.idade || 0, //Esse || 0 é a jogadinha para não aparecer no formulário o zero e não dar erro.
    }

    this.pacienteService.editarPaciente(paciente).subscribe(() => {
      console.log('Paciente editado com sucesso!');
      myForm.reset();
      this.searchText = '';
    });
  }
}