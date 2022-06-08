import React, { useState } from "react";
import { View, Text } from "react-native";
import CustomInput from "../../Components/CustomInput/index";
import CustomButton from "../../Components/CustomButton/index";
import styles from "./styles";
import SocialSignInButton from "../../Components/SocialSignInButton/index";

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const onRegisterPress = () => {
    return console.log("onRegisterPress");
  };
  const onTermsOfUsePressed = () => {
    console.log("onTermsOfUsePressed");
  };
  const onSignInPress = () => {
    console.log("onSignInPress");
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>
      <View style={styles.viewSecondary}>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
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

        <Text onPress={onTermsOfUsePressed} style={styles.text}>
          Bu registering, you confirm that you accept our{" "}
          <Text style={styles.link}>Terms of Use</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>
        </Text>
      </View>
      <SocialSignInButton />
      <Text onPress={onSignInPress} style={styles.text}>
        Have an account ? Sign in
      </Text>
    </View>
  );
};

export default SignInScreen;
