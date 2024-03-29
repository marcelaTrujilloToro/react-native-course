/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../../context/PeliculasApp/GradientContext';
import { useEffect } from 'react';
import { useFade } from '../../hooks/PeliculasHooks/useFade';

interface IGradientBackgroundProps {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: IGradientBackgroundProps) => {

    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);

    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {

        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut(0);
        });

    }, [colors, fadeIn, fadeOut, setPrevMainColors]);



    return (

        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.6 }}
            />
            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity }}
            >
                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.6 }}
                />
            </Animated.View>
            {children}
        </View>

    );
};
