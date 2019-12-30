import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {
    constructor(
        // La $ indica que es observable
        private actions$: Actions,
        private usuarioService: UserService
    ) { }

    @Effect()// dospatch: false, para no ejecutar infinito, se resuelve con el switchMap
    // this.actions$.ofType(usuariosActions.CARGAR_USUARIOS).pipe()
    cargarUsuarios$ = this.actions$
        .pipe(
            ofType(usuariosActions.CARGAR_USUARIOS),
            // map(action => {
            //     console.log(action);
            //     return action;
            // })
            switchMap(() => {
                return this.usuarioService.getUsers()
                    .pipe(
                        map(users => new usuariosActions.CargarUsuariosSuccess(users)),
                        catchError(error => of(new usuariosActions.CargarUsuariosFail(error)))
                    );
            })
        );


}
