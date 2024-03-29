/* eslint-disable react-native/no-inline-styles */
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HeaderTitle } from '../../components/ComponentsRNApp/HeaderTitle';
import { ThemeContext } from '../../context/ComponentsRN/themeContex/ThemeContex';
import { styles } from '../../theme/ComponentsRNApp/appTheme';

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme: {colors} } = useContext(ThemeContext);



    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Theme" />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity
                    onPress={setLightTheme}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        width: 150,
                        height: 50,
                        borderRadius: 20,

                    }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20,
                    }}
                    >Light</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={setDarkTheme}
                    activeOpacity={0.8}
                    style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        width: 150,
                        height: 50,
                        borderRadius: 20,

                    }}>
                    <Text style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 20,
                    }}
                    >Dark</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
