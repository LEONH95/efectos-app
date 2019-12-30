import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import * as usuarioAcciones from '../../store/actions';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})


export class UsuarioComponent implements OnInit {

  user: User;
  loading: boolean;
  error: any;


  constructor(private router: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit() {
    this.router.params
      .subscribe(params => {
        const id = params['id'];
        this.store.select('user').subscribe(
          (user) => {
            this.user = user.user,
              this.loading = user.loading;
            this.error = user.error;
          }
        );

        this.store.dispatch(new usuarioAcciones.CargarUsuario(id));
      });
  }

}
