import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonView: {
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonView_PRIMARY: {
    backgroundColor: "#3B71F3",
  },
  buttonView_SECONDARY: {
    borderColor: "#3B71F3",
    borderWidth: 1,
  },
  buttonView_TERTIARY: {
    backgroundColor: "white",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  buttonText_TERTIARY: {
    color: "grey",
  },
  buttonText_SECONDARY: {
    color: "#3B71F3",
  },
});
export default styles;
