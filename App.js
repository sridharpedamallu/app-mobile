import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { styles } from "./Styles";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <View style={styles.container}>
      {!user ? <LoginScreen /> : <HomeScreen />}
      <StatusBar style="auto" />
    </View>
  );
}
