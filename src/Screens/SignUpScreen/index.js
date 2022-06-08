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
import SocialSignInButton from "../../Components/SocialSignInButton/index";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const navigation = useNavigation();

  const onRegisterPress = () => {
    return navigation.navigate("ConfirmEmail");
  };
  const onTermsOfUsePressed = () => {
    return navigation.navigate("ConfirmEmail");
  };
  const onSignInPress = () => {
    return navigation.navigate("SignIn");
  };
  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      <View style={styles.viewSecondary}>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          keyboardType="email-address"
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={passwordRepeat}
          setValue={setPasswordRepeat}
          secureTextEntry
        />
        <CustomButton onPress={onRegisterPress} text="Register" />
        <TouchableOpacity onPress={onTermsOfUsePressed}>
          <Text style={styles.text}>
            Bu registering, you confirm that you accept our{" "}
            <Text style={styles.link}>Terms of Use</Text> and{" "}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>
      </View>
      <SocialSignInButton />
      <TouchableOpacity onPress={onSignInPress}>
        <Text style={styles.text}>Have an account ? Sign in</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default SignUpScreen;
