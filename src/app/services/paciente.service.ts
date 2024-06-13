import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Paciente from '../../models/paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http:HttpClient) { }

  getPacientes():Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`http://localhost:3000/pacientes`);
  }

  getPacienteById(id: any):Observable<Paciente> {
    return this.http.get<Paciente>(`http://localhost:3000/pacientes/${id}`);
  }

  salvarPaciente(paciente: Paciente):Observable<Paciente> {
    return this.http.post<Paciente>(`http://localhost:3000/pacientes/`, paciente);
  }

  editarPaciente(paciente: Paciente):Observable<Paciente> {
    return this.http.patch<Paciente>(`http://localhost:3000/pacientes/${paciente._id}`, paciente);
  }

  excluirPaciente(paciente: Paciente):Observable<Paciente> {
    return this.http.delete<Paciente>(`http://localhost:3000/pacientes/${paciente._id}`);
  }
}