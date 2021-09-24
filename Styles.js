import { StyleSheet } from "react-native";

const screenView = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

const primaryColor = "#561bb5";
const secondaryColor = "#5603fc";
const primaryTextColor = "white";

const controlWidth = "80%";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeScreenView: {
    ...screenView,
    backgroundColor: primaryColor,
  },

  loginScreenView: {
    ...screenView,
    backgroundColor: primaryColor,
  },

  headText: {
    color: primaryTextColor,
    fontSize: 32,
    marginBottom: 100,
  },

  welcomeText: {
    color: primaryTextColor,
    fontSize: 32,
    marginBottom: 20,
  },

  warningText: {
    color: primaryTextColor,
    fontSize: 24,
  },

  buttonText: {
    color: primaryColor,
    fontSize: 32,
  },

  textInput: {
    height: 50,
    borderColor: primaryTextColor,
    borderWidth: 2,
    borderRadius: 5,
    width: controlWidth,
    marginVertical: 15,
    color: primaryTextColor,
    fontSize: 24,
    paddingHorizontal: 10,
  },

  errorMessage: {
    color: "white",
    fontSize: 16,
    marginBottom: 100,
  },

  button: {
    alignItems: "center",
    backgroundColor: "white",
    borderColor: primaryColor,
    width: controlWidth,
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
});
