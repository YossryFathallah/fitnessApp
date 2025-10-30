import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const { width, height } = Dimensions.get("window");

const Weight = () => {
  const [selectedWeight, setSelectedWeight] = useState(60); // Changed from selectedAge
  const router = useRouter();
  const weights = Array.from({ length: 83 }, (_, i) => i + 45); // Ages 18-100

  return (
    <ImageBackground
      source={require("../assets/images/gender2.jpg")}
      style={styles.container}
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Select Your Weight</Text>
        <Text style={styles.subtitle}>
          This help us create your personalized plan
        </Text>

        <View style={styles.pickerContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.weightList}
          >
            {weights.map((weight) => (
              <TouchableOpacity
                key={weight}
                style={[
                  styles.weightItem,
                  selectedWeight === weight && styles.selectedWeight,
                ]}
                onPress={() => setSelectedWeight(weight)}
              >
                <Text
                  style={[
                    styles.weightText,
                    selectedWeight === weight && styles.selectedWeightText,
                  ]}
                >
                  {weight} kg
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Finish</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
          onPress={() => router.replace("(tabs)")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === "ios" ? 130 : 40,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 40,
  },
  pickerContainer: {
    height: hp("40%"),
    width: wp("40%"),
    backgroundColor: "rgba(64, 224, 208, 0.15)",
    borderRadius: 150,
    borderWidth: 1,
    borderColor: "#40E0D0",
    overflow: "hidden",
    marginVertical: 20,
    marginTop: 50,
  },
  weightList: {
    paddingVertical: 20,
  },
  weightItem: {
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2,
  },
  selectedWeight: {
    backgroundColor: "#40E0D0",
  },
  weightText: {
    color: "white",
    fontSize: 29,
    fontWeight: "600",
  },
  selectedWeightText: {
    color: "black",
  },
  nextButton: {
    position: "absolute",
    bottom: 40,
    right: 20,
    height: 50,
    width: width * 0.3,
    backgroundColor: "#40E0D0",
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  nextButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "700",
    marginRight: 4,
  },
  backButton: {
    position: "absolute",
    top: 725,
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

export default Weight;
