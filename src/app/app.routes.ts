
import { Routes} from '@angular/router';

import { ListUserComponent } from './components/list-user/list-user';
import { CreateRolComponent } from './components/create-rol/create-rol';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'rol_usuario/list-user',
    pathMatch: 'full'
  },
  {
    path: 'rol_usuario/list-user',
    component: ListUserComponent
  },
  {
    path: 'rol_usuario/create-rol',
    component: CreateRolComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
