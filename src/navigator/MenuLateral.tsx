import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingScreen} from '../screens/NavegacionApp/SettingScreen';
import {StackNavigator} from './StackNavigator';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

export type RootDrawerParams = {
  Tabs: undefined;
  SettingScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{drawerType: width >= 768 ? 'permanent' : 'front'}}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}

      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://lf.edu.co/wp-content/plugins/elementskit/widgets/yelp/assets/images/profile-placeholder.png',
          }}
        />
      </View>

      {/* Opciones de menu */}

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={{marginRight: 5}}>
            <Icon name="navigate-circle" size={30} color='blue' />
          </Text>
          <Text style={styles.menuItem}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.menuBoton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('SettingScreen')}>
          <Text style={{marginRight: 5}}>
            <Icon name="construct" size={30} color='red'/>
          </Text>
          <Text style={styles.menuItem}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
