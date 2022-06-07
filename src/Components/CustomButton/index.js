import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[
        styles.buttonView,
        styles[`buttonView_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
      ]}>
      <Text
        style={[
          styles.buttonText,
          styles[`buttonText_${type}`],
          fgColor ? {color: fgColor} : {},
        ]}>
        {' '}
        {text}{' '}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
