import { MaterialIcons } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          source={require("../assets/images/login.png")}
          style={styles.container}
        >
          <View style={styles.overlay} />

          <View style={styles.topNavContainer}>
            <TouchableOpacity>
              <Text style={[styles.topNavLink, styles.activeLink]}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.topNavDivider}> / </Text>
            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text style={styles.topNavLink}>Sign up</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.text}>Welcome, Warrior</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text style={styles.createAcount}>
                Don&apos;t have an account? Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>LOGIN</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 50,
    paddingRight: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  text: {
    color: "white",
    fontSize: 53,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 280,
    alignSelf: "auto",
    marginLeft: 30,
    textAlign: "left",
  },
  inputContainer: {
    width: "90%",
    alignSelf: "center",
    paddingRight: 0,
    marginBottom: 100,
    marginRight: -40,
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: "white",
    fontSize: 16,
  },
  cta: {
    position: "absolute",
    bottom: "5%",
    right: "5%",
    height: 50,
    width: "30%",
    backgroundColor: "#D0FF36",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  ctaText: {
    color: "black",
    fontSize: 12,
    marginRight: 6,
    fontWeight: "700",
  },
  backButton: {
    position: "absolute",
    top: 730,
    left: 40,
    width: 40,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  backButtonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "white",
    fontSize: 14,
    textAlign: "right",
    marginTop: -10,
    marginRight: 10,
    opacity: 0.8,
  },
  createAcount: {
    color: "white",
    fontSize: 14,
    textAlign: "right",
    marginTop: 40,
    marginRight: 50,
    opacity: 0.8,
    fontWeight: "700",
  },
  topNavContainer: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 30,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 2,
  },
  topNavLink: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  topNavDivider: {
    color: "white",
    fontSize: 18,
    marginHorizontal: 8,
    opacity: 0.8,
  },
  activeLink: {
    color: "#D0FF36",
  },
});
