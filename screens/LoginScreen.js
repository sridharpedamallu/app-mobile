import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../Styles";

export const LoginScreen = ({ Login }) => {
  const [loginName, setLoginName] = useState("sridhar@test.com");
  const [password, setPassword] = useState("test");
  const [step, setStep] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");

  const submitHandler = () => {
    setErrorMessage("");
    if (step === 1) {
      if (loginName.trim().length === 0) {
        setErrorMessage("Please enter email / phone number");
        return;
      }
      if (loginName !== "sridhar@test.com") {
        setErrorMessage("Email / Phone number not found");
        return;
      }
      setStep(2);
    } else {
      if (password.trim().length === 0) {
        setErrorMessage("Please enter password");
        return;
      }
      if (password !== "test") {
        setErrorMessage("Invalid password");
        return;
      }
      Login({ name: "sridhar", isSeller: true });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {step === 1 ? (
        <View style={styles.loginScreenView}>
          <Text style={styles.headText}>SIGN-IN</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setLoginName}
            value={loginName}
            placeholder="Email / Phone"
            placeholderTextColor="white"
          />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity style={styles.button} onPress={submitHandler}>
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.loginScreenView}>
          <Text style={styles.headText}>SIGN-IN</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="white"
          />
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TouchableOpacity style={styles.button} onPress={submitHandler}>
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
