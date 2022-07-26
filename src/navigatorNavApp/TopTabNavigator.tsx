import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/NavegacionApp/ChatScreen';
import {ContactsScreen} from '../screens/NavegacionApp/ContactsScreen';
import {AlbumsScreen} from '../screens/NavegacionApp/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/NavigationApp/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({

        //estilos 
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {backgroundColor: colores.primary},
        tabBarStyle: {shadowColor: 'transparent', elevation: 0},

        //funcion para cambiar iconos y colores de los mismos
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Chat':
              iconName = 'chatbubble-ellipses';
              break;
            case 'Contacts':
              iconName = 'people';
              break;
            case 'Albums':
              iconName = 'albums';
              break;
          }
          return <Icon color={color} name={iconName} size={25}/>;
        },
      })}
      >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
