
import React, { createContext, useReducer } from 'react';
import { themeReducer, ThemeState, lightTheme } from './themeReducer';


interface ThemeContexProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void,

}

export const ThemeContext = createContext({} as ThemeContexProps);

export const ThemeProvider = ({ children }: any) => {

    const [theme, dispatch] = useReducer(themeReducer, lightTheme);


    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
        console.log('dark');

    };
    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
        console.log('light');

    };

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
};
