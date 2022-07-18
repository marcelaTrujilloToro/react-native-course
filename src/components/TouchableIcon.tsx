import React, { useContext } from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface TouchableOpacityProps {
    iconName: string;
    color: string;
}

export const TouchableIcon = ({iconName, color}: TouchableOpacityProps) => {

  const {changeFavIcon} = useContext(AuthContext)

  return (
    <TouchableOpacity onPress={() => {changeFavIcon(iconName)}}>
      <Icon name={iconName} size={80} color={color} />
    </TouchableOpacity>
  );
};
