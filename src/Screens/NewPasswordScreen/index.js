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

const NewPasswordScreen = () => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigation = useNavigation();

  const onSubmitPress = () => {
    return navigation.navigate("Home");
  };

  const onSignInPress = () => {
    return navigation.navigate("SignIn");
  };

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.root}>
      <Text style={styles.title}>Reset Your Password</Text>
      <CustomInput placeholder="Code" value={code} setValue={setCode} />
      <CustomInput
        placeholder="Enter your new password"
        value={newPassword}
        setValue={setNewPassword}
      />
      <CustomButton onPress={onSubmitPress} text="Submit" />
      <TouchableOpacity onPress={onSignInPress}>
        <Text style={styles.text}>Back to Sign In</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default NewPasswordScreen;
