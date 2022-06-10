import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Keyboard,
} from "react-native";
import CustomInput from "../../Components/CustomInput/index";
import CustomButton from "../../Components/CustomButton/index";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const ForgetPasswordScreen = () => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSendPress = (data) => {
    console.log(data);
    return navigation.navigate("NewPassword");
  };

  const onSignInPress = () => {
    return navigation.navigate("SignIn");
  };

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>
      <CustomInput
        name="Username"
        control={control}
        placeholder="Username"
        rules={{
          required: "Username is required",
        }}
      />
      <CustomButton onPress={handleSubmit(onSendPress)} text="Send" />
      <TouchableOpacity onPress={onSignInPress}>
        <Text style={styles.text}>Back to Sign In</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default ForgetPasswordScreen;
