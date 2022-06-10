import React, { useState } from "react";
import {
  View,
  Image,
  useWindowDimensions,
  Pressable,
  Keyboard,
} from "react-native";
import Logo from "../../../assets/images/Login.png";
import CustomInput from "../../Components/CustomInput/index";
import CustomButton from "../../Components/CustomButton/index";
import styles from "./styles";
import SocialSignInButton from "../../Components/SocialSignInButton";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";

const SignInScreen = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPress = (data) => {
    console.log(data);
    return navigation.navigate("Home");
  };
  const onForgetPasswordPress = () => {
    return navigation.navigate("ForgetPassword");
  };
  const onSignUpPress = () => {
    return navigation.navigate("SignUp");
  };
  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.root}>
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        source={Logo}
        resizeMode="contain"
      />
      <View style={styles.viewSecondary}>
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />
        <CustomInput
          placeholder="Password"
          name="password"
          secureTextEntry
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be minimum 8 characters long",
            },
          }}
        />
        <CustomButton onPress={handleSubmit(onSignInPress)} text="Sign In" />
        <CustomButton
          onPress={onForgetPasswordPress}
          text="Forget Password?"
          type="TERTIARY"
        />
      </View>
      <View style={styles.viewSecondary}>
        <SocialSignInButton />
      </View>
      <CustomButton
        bgColor="white"
        fgColor="black"
        onPress={onSignUpPress}
        text="Don't have an Account ? Create one"
      />
    </Pressable>
  );
};

export default SignInScreen;
