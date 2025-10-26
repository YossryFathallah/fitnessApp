import { MaterialIcons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/first.png")}
      style={styles.background}
      contentFit="cover"
    >
      <View style={styles.overlay} />

      {/* Logo at the top */}
      <View style={styles.topArea} pointerEvents="none">
        <View style={styles.logoCircle}>
          <MaterialIcons name="fitness-center" size={18} color="#fff" />
        </View>
      </View>

      {/* Center text */}
      <View style={styles.centerContent}>
        <Text style={styles.title}>FitFlow</Text>
        <Text style={styles.subtitle}>DON&apos;T QUIT STAY FIT</Text>
      </View>

      <View style={styles.divider} />

      {/* Button */}
      <TouchableOpacity
        style={styles.cta}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.ctaText}>START NOW</Text>
        <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Index;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  topArea: {
    position: "absolute",
    top: 48,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 2,
  },
  logoCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FF8A00",
    justifyContent: "center",
    alignItems: "center",
  },
  centerContent: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "700",
  },
  subtitle: {
    color: "white",
    fontSize: 20,
    letterSpacing: 1,
    marginTop: 40,
    marginBottom: 10,
  },
  divider: {
    height: 2,
    width: "60%",
    backgroundColor: "#D0FF36",
    marginTop: 1,
  },
  cta: {
    position: "absolute",
    bottom: "8%",
    height: 66,
    width: "82%",
    backgroundColor: "#D0FF36",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  ctaText: {
    color: "black",
    fontSize: 20,
    marginRight: 8,
  },
});
