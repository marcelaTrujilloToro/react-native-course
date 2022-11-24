
import  React, { createContext, useState } from 'react';

interface IImageColors {
    primary: string,
    secondary: string
}

interface ContextProps {
    colors: IImageColors,
    prevColors: IImageColors,
    setMainColors: (colores: IImageColors) => void;
    setPrevMainColors: (colores: IImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);


export const GradientProvider = ({ children }: any) => {

    const [colors, setColors] = useState<IImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const [prevColors, setPrevColors] = useState<IImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const setMainColors = (colores: IImageColors) => {
        setColors(colores);
    };

    const setPrevMainColors = (colores: IImageColors) => {
        setPrevColors(colores);
    };

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors,
        }}>
            {children}
        </GradientContext.Provider>
    );
};
