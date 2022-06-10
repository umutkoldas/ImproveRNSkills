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
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const NewPasswordScreen = () => {
  const { control, handleSubmit } = useForm();

  const navigation = useNavigation();

  const onSubmitPress = (data) => {
    console.log(data);
    return navigation.navigate("Home");
  };

  const onSignInPress = () => {
    return navigation.navigate("SignIn");
  };

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>
      <CustomInput
        placeholder="Code"
        name="Code"
        control={control}
        rules={{ required: "Code is required" }}
      />
      <CustomInput
        name="Password"
        control={control}
        placeholder="Enter your new password"
        secureTextEntry
        rules={{
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password should be minimum 8 characters long",
          },
        }}
      />
      <CustomButton onPress={handleSubmit(onSubmitPress)} text="Submit" />
      <TouchableOpacity onPress={onSignInPress}>
        <Text style={styles.text}>Back to Sign In</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default NewPasswordScreen;
