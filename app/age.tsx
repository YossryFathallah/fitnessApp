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

const Age = () => {
  const [selectedAge, setSelectedAge] = useState(25);
  const router = useRouter();
  const ages = Array.from({ length: 83 }, (_, i) => i + 18); // Ages 18-100

  return (
    <ImageBackground
      source={require("../assets/images/gender2.jpg")}
      style={styles.container}
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.title}>Select Your Age</Text>
        <Text style={styles.subtitle}>You can change it later</Text>

        <View style={styles.pickerContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.ageList}
          >
            {ages.map((age) => (
              <TouchableOpacity
                key={age}
                style={[
                  styles.ageItem,
                  selectedAge === age && styles.selectedAge,
                ]}
                onPress={() => setSelectedAge(age)}
              >
                <Text
                  style={[
                    styles.ageText,
                    selectedAge === age && styles.selectedAgeText,
                  ]}
                >
                  {age}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.push("/weight")}
        >
          <Text style={styles.nextButtonText}>NEXT</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
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
    fontSize: 33,
    fontWeight: "700",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 15,
    opacity: 0.8,
    marginBottom: 40,
  },
  pickerContainer: {
    height: hp("40%"),
    width: wp("30%"),
    backgroundColor: "rgba(64, 224, 208, 0.15)",
    borderRadius: 150,
    borderWidth: 1,
    borderColor: "#40E0D0",
    overflow: "hidden",
    marginVertical: 20,
    marginTop: 50,
  },
  ageList: {
    paddingVertical: 20,
  },
  ageItem: {
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 2,
  },
  selectedAge: {
    backgroundColor: "#40E0D0",
  },
  ageText: {
    color: "white",
    fontSize: 29,
    fontWeight: "600",
  },
  selectedAgeText: {
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

export default Age;
