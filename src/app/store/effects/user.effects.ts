import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    constructor(
        // La $ indica que es observable
        private actions$: Actions,
        private usuarioService: UserService
    ) { }

    @Effect()// dospatch: false, para no ejecutar infinito, se resuelve con el switchMap
    // this.actions$.ofType(usuariosActions.CARGAR_USUARIOS).pipe()
    cargarUsuario$ = this.actions$
        .pipe(
            ofType(usuarioActions.CARGAR_USUARIO),
            // map(action => {
            //     console.log(action);
            //     return action;
            // })
            switchMap((action) => {
                const id = action['id'];
                return this.usuarioService.getUserById(id)
                    .pipe(
                        map(user => new usuarioActions.CargarUsuarioSuccess(user)),
                        catchError(error => of(new usuarioActions.CargarUsuarioFail(error)))
                    );
            })
        );


}
