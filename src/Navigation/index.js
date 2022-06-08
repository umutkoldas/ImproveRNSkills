import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../Screens/SignInScreen/index";
import SignUpScreen from "../Screens/SignUpScreen/index";
import ConfirmEmailScreen from "../Screens/ConfirmEmailScreen/index";
import ForgetPasswordScreen from "../Screens/ForgetPasswordScreen/index";
import NewPasswordScreen from "../Screens/NewPasswordScreen/index";
import HomeScreen from "../Screens/HomeScreen/index";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
