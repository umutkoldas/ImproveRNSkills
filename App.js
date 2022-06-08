import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SplashScreen from "react-native-splash-screen";
import AppNavigation from "./src/Navigation";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <AppNavigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;
