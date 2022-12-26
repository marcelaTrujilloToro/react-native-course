/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { CustomSwitch } from '../../components/ComponentsRNApp/CustomSwitch';
import { HeaderTitle } from '../../components/ComponentsRNApp/HeaderTitle';
import { styles } from '../../theme/ComponentsRNApp/appTheme';
import { useForm } from '../../hooks/ComponentsRN/useForm';

export const InputScreen = () => {

  const { formulario, onChange, isSubscribe } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribe: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>

        {/* en caso que no se este cerrando el teclado */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

          <View style={{ ...styles.globalMargin, marginBottom: 100 }}>
            <HeaderTitle title="Text inputs" />

            <TextInput
              style={stylesScreen.input}
              placeholder="Ingrese su nombre"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={(value) => onChange(value, 'name')}
            />
            <TextInput
              style={stylesScreen.input}
              placeholder="Ingrese su email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(value) => onChange(value, 'email')}
              keyboardType="email-address"
              keyboardAppearance="dark"
            />


            <TextInput
              style={stylesScreen.input}
              placeholder="Ingrese su telefono"
              onChangeText={(value) => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={stylesScreen.switchRow}>


              <Text style={stylesScreen.switchText}>Subscribirse: </Text>
              <CustomSwitch
                isOn={isSubscribe}
                onChange={(value) => {
                  onChange(value, 'isSubscribe');
                }}
              />
            </View>

            <HeaderTitle title={JSON.stringify(formulario, null, 3)} />

          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    marginVertical: 6,
  },
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
