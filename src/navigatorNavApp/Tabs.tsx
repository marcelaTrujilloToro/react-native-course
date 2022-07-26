import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/NavegacionApp/Tab1Screen';
import {Tab2Screen} from '../screens/NavegacionApp/Tab2Screen';
import {StackNavigator} from './StackNavigator';
import {colores, styles} from '../theme/NavigationApp/appTheme';
import {Text} from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}

      screenOptions={({route}) => ({

        //estilos 
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          borderTopColor: colores.primary,
          borderTopWidth: 3,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },

        //funcion para cambiar iconos y colores de los mismos
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'airplane-outline';
              break;
            case 'TopTabNavigator':
              iconName = 'beer';
              break;
            case 'StackNavigator':
              iconName = 'musical-notes';
              break;
          }
          return <Icon color={color} name={iconName} size={25}/>;
        },
      })}>
      <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
          //cambiar el color a cada icono
          // tabBarIcon: props => <Text style={{color: props.color}}>Tab 1</Text>,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="TopTabNavigator"
        options={{title: 'Tab 2'}}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{title: 'Stack'}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
