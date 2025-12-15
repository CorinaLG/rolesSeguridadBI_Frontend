
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Esta es la interfaz que define la estructura del usuario
export interface Usuario {
  id_usuario: number;
  cuenta: string;
  cargo: string;
  estado_usuario: string;
}

// Este es el servicio que hace las peticiones HTTP
@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly baseUrl = 'http://localhost:8080/usuario'; // Ajusta tu URL real

  constructor(private http: HttpClient) {}

  // Método para obtener lista de usuarios
  getUsuarios(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(this.baseUrl);  // solo /usuario
}

}
