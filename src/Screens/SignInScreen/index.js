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

const SignInScreen = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPress = () => {
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
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton onPress={onSignInPress} text="Sign In" />
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
