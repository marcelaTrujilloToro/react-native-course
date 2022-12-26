/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CustomSwitch } from '../../components/ComponentsRNApp/CustomSwitch';
import { HeaderTitle } from '../../components/ComponentsRNApp/HeaderTitle';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    const {isActive, isHappy, isHungry} = state;

    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value,
        });
    };


    return (
        <View style={{ marginHorizontal: 20 }}>

            <HeaderTitle title="Switches" />

            <View style={styles.switchRow}>
                <Text style={styles.switchText}>Is active</Text>
                <CustomSwitch
                    isOn={isActive}
                    onChange={(value) => {
                        onChange(value, 'isActive');
                    }}
                />
            </View>
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>Is hungry</Text>
                <CustomSwitch
                    isOn={isHungry}
                    onChange={(value) => {
                        onChange(value, 'isHungry');
                    }}
                />
            </View>
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>Is happy</Text>
                <CustomSwitch
                    isOn={isHappy}
                    onChange={(value) => {
                        onChange(value, 'isHappy');
                    }}
                />
            </View>

            <Text style={styles.switchText}>
                {JSON.stringify(state, null, 5)}
            </Text>

        </View>
    );
};

const styles = StyleSheet.create({
    switchText: {
        marginTop: 10,
        fontSize: 25,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 7,
    },
});
