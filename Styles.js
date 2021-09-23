import { StyleSheet } from "react-native";

const screenView = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
};

const primaryColor = "#fc03ba";
const secondaryColor = "#5603fc";
const primaryTextColor = "white";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  homeScreenView: {
    ...screenView,
    backgroundColor: secondaryColor,
  },

  loginScreenView: {
    ...screenView,
    backgroundColor: primaryColor,
  },

  headText: {
    color: primaryTextColor,
    fontSize: 32,
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
    width: "80%",
    marginVertical: 15,
    color: primaryTextColor,
    fontSize: 24,
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    borderColor: primaryColor,
    width: "80%",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
  },
});
