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

const ForgetPasswordScreen = () => {
  const [username, setUsername] = useState("");
  const navigation = useNavigation();

  const onSendPress = () => {
    return navigation.navigate("NewPassword");
  };

  const onSignInPress = () => {
    return navigation.navigate("SignIn");
  };
 
  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomButton onPress={onSendPress} text="Send" />
      <TouchableOpacity onPress={onSignInPress}>
        <Text style={styles.text}>Back to Sign In</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default ForgetPasswordScreen;
