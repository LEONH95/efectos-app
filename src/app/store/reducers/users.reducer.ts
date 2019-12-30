import { User } from '../../models/user.model';
import * as fromUsuarios from '../actions';

export interface UsersState {
    users: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UsersState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};


export function usuariosReducer(state = initState, action: fromUsuarios.usuariosAcciones): UsersState {
    switch (action.type) {
        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state,
                loading: true,
                error: null
            };

        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                users: [...action.usuarios]
            };

        case fromUsuarios.CARGAR_USUARIOS_FAIL:
            return {
                ...state,
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

