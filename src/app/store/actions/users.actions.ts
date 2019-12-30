import { Action } from '@ngrx/store';
import { User } from '../../models/user.model';
export const CARGAR_USUARIOS = '[Users] Carga usuarios';
export const CARGAR_USUARIOS_FAIL = '[Users] Carga usuarios fail';
export const CARGAR_USUARIOS_SUCCESS = '[Users] Carga usuarios success';

export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;
    // payload
    constructor(public payload: any) { }

}

export class CargarUsuariosSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;

    constructor(public usuarios: User[]) { }

}


export type usuariosAcciones =
    CargarUsuarios |
    CargarUsuariosFail |
    CargarUsuariosSuccess;
