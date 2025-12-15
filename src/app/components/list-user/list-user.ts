
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';              // <-- importa CommonModule
import { UserService, Usuario } from '../../services/user';

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [CommonModule],                                   // <-- agrégalo aquí
  templateUrl: './list-user.html',
  styleUrls: ['./list-user.css']                             // <-- asegúrate que sea plural
})
export class ListUserComponent implements OnInit {
  usuarios: Usuario[] = [];
  loading = false;
  error = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loading = true;
    this.userService.getUsuarios().subscribe({
      next: (data) => { this.usuarios = data; this.loading = false; },
      error: (err) => { this.error = 'No se pudo cargar usuarios'; this.loading = false; }
    });
  }
}
