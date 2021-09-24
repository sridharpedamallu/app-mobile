import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import { HomeScreen } from "./screens/HomeScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { styles } from "./Styles";

export default function App() {
  const [user, setUser] = useState(null);

  const Login = (user) => {
    setUser(() => {
      return user;
    });
  };

  return (
    <View style={styles.container}>
      {!user ? <LoginScreen Login={Login} /> : <HomeScreen user={user} />}
      <StatusBar style="auto" />
    </View>
  );
}
