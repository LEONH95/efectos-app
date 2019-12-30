import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
export const CARGAR_USUARIO = '[User] Carga usuario';
export const CARGAR_USUARIO_FAIL = '[User] Carga usuario fail';
export const CARGAR_USUARIO_SUCCESS = '[User] Carga usuario success';

export class CargarUsuario implements Action {
    readonly type = CARGAR_USUARIO;
    constructor(public id: string) { }
}

export class CargarUsuarioFail implements Action {
    readonly type = CARGAR_USUARIO_FAIL;
    // payload
    constructor(public payload: any) { }

}

export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIO_SUCCESS;

    constructor(public usuario: User) { }

}


export type usuarioAcciones =
    CargarUsuario |
    CargarUsuarioFail |
    CargarUsuarioSuccess;
