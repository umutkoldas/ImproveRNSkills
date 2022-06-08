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

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState("");

  const navigation = useNavigation();

  const onConfirmPress = () => {
    return navigation.navigate("Home");
  };

  const onSignInPress = () => {
    return navigation.navigate("SignIn");
  };
  const onResendCodePress = () => {
    console.log("onResendCodePress");
  };

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.root}>
      <Text style={styles.title}>Confirm Your Email</Text>
      <CustomInput
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}
      />
      <CustomButton onPress={onConfirmPress} text="Confirm" />
      <CustomButton
        onPress={onResendCodePress}
        text="Resend Code"
        type="SECONDARY"
      />

      <TouchableOpacity onPress={onSignInPress}>
        <Text style={styles.text}>Back to Sign In</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default ConfirmEmailScreen;
