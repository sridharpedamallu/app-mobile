import React from "react";
import { View, Text } from "react-native";
import { styles } from "../Styles";

export const HomeScreen = () => {
  return (
    <View style={styles.homeScreenView}>
      <Text style={styles.headText}>This is home page</Text>
    </View>
  );
};
