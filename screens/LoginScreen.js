import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../Styles";

export const LoginScreen = () => {
  const [loginName, setLoginName] = useState("");
  return (
    <View style={styles.loginScreenView}>
      <Text style={styles.headText}>This is login page</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setLoginName}
        value={loginName}
        placeholder="Email / Phone"
        placeholderTextColor="white"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};
