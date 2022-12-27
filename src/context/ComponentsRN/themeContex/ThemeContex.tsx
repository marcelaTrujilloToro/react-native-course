
import React, { createContext, useEffect, useReducer } from 'react';
import { useColorScheme } from 'react-native';
import { themeReducer, ThemeState, lightTheme, darkTheme } from './themeReducer';


interface ThemeContexProps {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void,

}

export const ThemeContext = createContext({} as ThemeContexProps);

export const ThemeProvider = ({ children }: any) => {

    //solo IOS leer el tema del dispisitivo
    const colorScheme = useColorScheme();

    const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme);

    //solo IOS  esta escuchando el cambio del tema en el dispositivo para hacer el cambio
    useEffect(() => {
        (colorScheme === 'light')
            ? setLightTheme()
            : setDarkTheme();
    }, [colorScheme]);


    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
    };
    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
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
