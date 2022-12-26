import React from 'react';
import { Alert, Button, View } from 'react-native';
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../../components/ComponentsRNApp/HeaderTitle';
import { styles } from '../../theme/ComponentsRNApp/appTheme';

export const AlertScreen = () => {


  const showAlert = ( ) => {
    Alert.alert(
      'Titulo',
      'este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
        // { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]
    );
  };

  const showPrompt = ( ) => {
    // Alert.prompt(//solo sirve en ios
    //   '¿Esta seguro?',
    //   'Esta acción no se puede revertir',
    //   (valor: string) => console.log('info: ' + valor),
    //   'plain-text',
    //   'Hola mundo',
    //   'number-pad'
    // );
    prompt(//solo para que sirva en ios y android
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
       {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'destructive'},
       {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
      ],
      {
          type: 'plain-text',
          cancelable: false,
          defaultValue: 'test',
          placeholder: 'placeholder',
      }
  );
  };

  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title="Alerts"/>

        <Button
        title="Show alert"
          onPress={showAlert}
        />

        <View style={{height: 60}}/>

        <Button
        title="Show prompt"
          onPress={showPrompt}
        />
    </View>
  );
};
