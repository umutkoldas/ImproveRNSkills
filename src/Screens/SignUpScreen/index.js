import React from "react";
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
import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("Password");
  const navigation = useNavigation();

  const onRegisterPress = (data) => {
    console.log(data);
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
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Username should be max 24 characters long",
            },
          }}
        />
        <CustomInput
          name="E-mail"
          control={control}
          keyboardType="email-address"
          placeholder="Email"
          rules={{
            pattern: {
              EMAIL_REGEX,
              value: EMAIL_REGEX,
              message: "Email is invalid",
            },
          }}
        />
        <CustomInput
          name="Password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <CustomInput
          name="Repeat-Password"
          control={control}
          placeholder="Repeat Password"
          secureTextEntry
          rules={{
            validate: (value) => value === pwd || "Password do not match",
          }}
        />
        <CustomButton onPress={handleSubmit(onRegisterPress)} text="Register" />
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
