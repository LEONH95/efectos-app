import { User } from '../../models/user.model';
import * as fromUsuario from '../actions';

export interface UserState {
    user: User;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UserState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};


export function usuarioReducer(state = initState, action: fromUsuario.usuarioAcciones): UserState {
    switch (action.type) {
        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state,
                loading: true,
                error: null
            };

        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: { ...action.usuario }
            };

        case fromUsuario.CARGAR_USUARIO_FAIL:
            return {
                ...state,
                user: null,
                loading: false,
                loaded: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };
        default:
            return state;
    }
}

