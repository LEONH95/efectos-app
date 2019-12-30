// Importar Reducer a store
import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    users: reducers.UsersState;
    user: reducers.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
    users: reducers.usuariosReducer,
    user: reducers.usuarioReducer
};


