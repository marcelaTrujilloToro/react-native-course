import React from 'react';
import { View } from 'react-native';
import { HeaderTitle } from '../../components/ComponentsRNApp/HeaderTitle';
import { styles } from '../../theme/ComponentsRNApp/appTheme';

export const InputScreen = () => {
  return (
    <View style={styles.globalMargin}>
        <HeaderTitle title="Text inputs"/>
    </View>
  );
};
