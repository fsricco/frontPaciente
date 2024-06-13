import { Component } from '@angular/core';
import Paciente from '../../../models/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //Pra esse sublinhado sumir vc cria a pasta models e dentro dela o paciente.ts
  pacientes: Paciente[] = [ ];

  constructor(private pacienteService: PacienteService) { }
  

  ngOnInit() {
    this.pacienteService.getPacientes().subscribe((pacientes: Paciente[]) => {
      this.pacientes = pacientes;
    });
  }

  excluirPaciente(paciente: Paciente) {
    this.pacienteService.excluirPaciente(paciente).subscribe(() => {
      this.pacientes = this.pacientes.filter(pac => pac._id !== paciente._id);
    });
  }

}