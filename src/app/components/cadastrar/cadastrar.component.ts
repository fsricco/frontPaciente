import { Component } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { NgForm } from '@angular/forms';
import Paciente from '../../../models/paciente';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {

  constructor(private pacienteService: PacienteService) { }

  cadastrar(form: NgForm) {
    if (form.invalid) {
      return;
    }

    let paciente: Paciente = {
      _id: null,
      nome: form.value.nome,
      planoSaude: form.value.planoSaude,
      idade: form.value.idade,
    }

    this.pacienteService.salvarPaciente(paciente).subscribe(() => {
      console.log('Paciente cadastrado com sucesso!');
      form.reset();
    });
  }

}
