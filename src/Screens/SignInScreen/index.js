import React, { useState } from "react";
import { View, Image, useWindowDimensions } from "react-native";
import Logo from "../../../assets/images/Login.png";
import CustomInput from "../../Components/CustomInput/index";
import CustomButton from "../../Components/CustomButton/index";
import styles from "./styles";
import SocialSignInButton from "../../Components/SocialSignInButton";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSignInPress = () => {
    return console.log("onSignInPress");
  };
  const onForgetPasswordPress = () => {
    return console.log("ForgetPasswordPress");
  };
  const onSignInwithFacebook = () => {
    console.log("onSignInwithFacebook");
  };
  const onSignInwithGoogle = () => {
    console.log("onSignInwithGoogle");
  };
  const onSignInwithApple = () => {
    console.log("onSignInwithApple");
  };
  return (
    <View style={styles.root}>
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
        onPress={onSignInwithApple}
        text="Don't have an Account ? Create one"
      />
    </View>
  );
};

export default SignInScreen;
