import { View, TextInput } from "react-native";
import React from "react";
import styles from "./styles";

const CustomInput = ({
  placeholder,
  value,
  setValue,
  secureTextEntry,
  keyboardType,
  bColor,
}) => {
  return (
    <View style={[styles.container, bColor ? { borderColor: "red" } : {}]}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default CustomInput;
