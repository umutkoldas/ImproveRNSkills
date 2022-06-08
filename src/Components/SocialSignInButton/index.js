import { View, Text } from "react-native";
import React from "react";
import CustomButton from "../CustomButton";
import styles from "./styles";

const SocialSignInButton = () => {
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
    <View style={styles.viewSecondary}>
      <CustomButton
        bgColor="#E7EAF4"
        fgColor="#4765A9"
        onPress={onSignInwithFacebook}
        text="Sign In with Facebook"
      />
      <CustomButton
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
        onPress={onSignInwithGoogle}
        text="Sign In with Google"
      />
      <CustomButton
        bgColor="#e3e3e3"
        fgColor="#363636"
        onPress={onSignInwithApple}
        text="Sign In with Apple"
      />
    </View>
  );
};

export default SocialSignInButton;
