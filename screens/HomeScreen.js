import React from "react";
import { View, Text } from "react-native";
import { styles } from "../Styles";

export const HomeScreen = ({ user }) => {
  return (
    <View style={styles.homeScreenView}>
      <Text style={styles.welcomeText}>Welcome {user.name}</Text>
      {!user.isSeller ? (
        <Text style={styles.warningText}>
          Do you want to register as seller?
        </Text>
      ) : (
        <Text style={styles.warningText}>All set to go to start selling</Text>
      )}
    </View>
  );
};
