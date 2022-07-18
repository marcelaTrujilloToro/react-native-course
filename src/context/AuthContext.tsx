import React, {createContext} from 'react';
import {useReducer} from 'react';
import {authReducer} from './AuthReducer';

//Definir que informacion se tendra en el context
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// Estado inicial
export const authInicialState: AuthState = {
  isLoggedIn: false,
  //   userName: 'Marcela',
  //   favoriteIcon: 'Ninguno'
};

//Lo usaremos para decirle a react como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavIcon: (iconName: string) => void;
  changeUserName: (name: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInicialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logout = () => {
    dispatch({type: 'logout'})
  }

  const changeUserName = (name: string) => {
    dispatch({type: 'changeUserName', payload: name});
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logout,
        changeFavIcon,
        changeUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
