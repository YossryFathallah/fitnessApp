import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },
  text: {
    color: "white",
    fontSize: 24,
  },
});
