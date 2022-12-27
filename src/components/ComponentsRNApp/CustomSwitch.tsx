import React, { useContext, useState } from 'react';
import { Platform, Switch } from 'react-native';
import { ThemeContext } from '../../context/ComponentsRN/themeContex/ThemeContex';

interface Props {
    isOn: boolean,
    onChange: (isEnabled: boolean) => void;
}


export const CustomSwitch = ({ isOn, onChange }: Props) => {

    const { theme: {colors} } = useContext(ThemeContext);

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    };

    return (
        <Switch
            trackColor={{ false: '#d9d9db', true: colors.primary }}
            thumbColor={(Platform.OS === 'ios') ? '' : colors.primary}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};
