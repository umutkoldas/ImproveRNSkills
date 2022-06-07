import {View, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';

const CustomInput = ({placeholder, value, setValue, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;
