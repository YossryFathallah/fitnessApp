import { ImageBackground } from "expo-image";
import React from "react";
import { StyleSheet, Text } from "react-native";

const index = () => {
  return (
    <ImageBackground
      source={require("../assets/images/first.jpg")}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ color: "white", fontSize: 45, fontFamily: "regular" }}>
        Fit Flow
      </Text>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({});
