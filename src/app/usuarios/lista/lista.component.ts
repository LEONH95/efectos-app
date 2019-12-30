import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: User[] = [];
  loading: boolean;
  error: any;

  constructor(
    // public userService: UserService
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.userService.getUsers()
    //   .subscribe(users => {
    //     console.log(users);
    //     this.usuarios = users;
    //   });
    this.store.select('users')
      .subscribe(users => {

        this.usuarios = users.users;
        this.loading = users.loading;
        this.error = users.error;

      });

    this.store.dispatch(new usuariosActions.CargarUsuarios());
  }

}
