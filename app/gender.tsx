import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Add this import
import React, { useState } from "react";
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Gender = () => {
  const [selectedGender, setSelectedGender] = useState<
    "male" | "female" | null
  >(null);
  const router = useRouter();

  const handleGenderSelect = (gender: "male" | "female") => {
    setSelectedGender(gender);
    console.log("Selected:", gender); // Add this to debug
  };

  return (
    <ImageBackground
      source={require("../assets/images/gender2.jpg")}
      style={styles.background}
    >
      <View style={styles.overlay} />

      <View style={styles.centerContent}>
        <Text style={styles.title}>Tell us About Yourself</Text>
        <Text style={styles.subtitle}>
          To give you a better experience by knowing your gender
        </Text>

        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              styles.maleButton,
              selectedGender === "male" && styles.selectedMale,
            ]}
            onPress={() => handleGenderSelect("male")}
          >
            <MaterialIcons
              name="male"
              size={40}
              color={selectedGender === "male" ? "#fff" : "#40E0D0"}
            />
            <Text
              style={[
                styles.genderText,
                { color: selectedGender === "male" ? "#fff" : "#40E0D0" },
              ]}
            >
              Male
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.genderButton,
              styles.femaleButton,
              selectedGender === "female" && styles.selectedFemale,
            ]}
            onPress={() => handleGenderSelect("female")}
          >
            <MaterialIcons
              name="female"
              size={40}
              color={selectedGender === "female" ? "#fff" : "#FF69B4"}
            />
            <Text
              style={[
                styles.genderText,
                { color: selectedGender === "female" ? "#fff" : "#FF69B4" },
              ]}
            >
              Female
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.cta, { opacity: selectedGender ? 1 : 0.5 }]}
          onPress={() => selectedGender && router.push("/age")} // Changed from /weight to /age
          disabled={!selectedGender}
        >
          <Text style={styles.ctaText}>NEXT</Text>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Gender;

const styles = StyleSheet.create({
  background: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  centerContent: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: Platform.OS === "ios" ? -60 : 40,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 33,
    fontWeight: "700",
    textAlignVertical: "center",
  },
  subtitle: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    letterSpacing: 1,
    marginTop: 10,
    marginBottom: 40,
  },
  genderContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 40,
    gap: 20, // Space between buttons
  },
  genderButton: {
    width: "80%",
    height: 150,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  maleButton: {
    borderColor: "#40E0D0",
  },
  femaleButton: {
    borderColor: "#FF69B4",
  },
  selectedMale: {
    backgroundColor: "#40E0D0",
  },
  selectedFemale: {
    backgroundColor: "#FF69B4",
  },
  genderText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
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
    marginRight: 6,
    fontWeight: "700",
  },
  backButton: {
    position: "absolute",
    top: 785,
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
