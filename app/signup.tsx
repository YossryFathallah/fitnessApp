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

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text style={styles.topNavLink}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.topNavDivider}> / </Text>
            <TouchableOpacity>
              <Text style={[styles.topNavLink, styles.activeLink]}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.text}>Join Us</Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
            />
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.cta}>
            <Text style={styles.ctaText}>SIGN UP</Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={30}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          ></TouchableOpacity>
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

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.34)",
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
    color: "#40E0D0",
  },
  text: {
    color: "white",
    fontSize: 53,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 120,
    alignSelf: "center",
  },
  inputContainer: {
    width: "90%",
    alignSelf: "center",
    marginBottom: 40,
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
    backgroundColor: "#40E0D0",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  ctaText: {
    color: "black",
    fontSize: 12,
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
});
