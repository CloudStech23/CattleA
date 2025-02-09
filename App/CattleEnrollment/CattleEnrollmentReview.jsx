import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const imageCategories = [
  { id: 1, title: "Front Face" },
  { id: 2, title: "Left Side" },
  { id: 3, title: "Right Side" },
  { id: 4, title: "Back Side" },
  { id: 5, title: "Teeth" },
  { id: 6, title: "Distinguish Marks" },
  { id: 7, title: "Muzzle" },
];

function CattleEnrollmentReview() {
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      setPermission(status === "granted");
    })();
  }, []);

  const openCamera = async () => {
    if (!permission) {
      Alert.alert("Permission Denied", "You need to grant camera permission to use this feature.");
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      Alert.alert("Image Captured", "Your image has been saved successfully.");
      console.log(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {imageCategories.map((item) => (
          <View key={item.id} style={styles.box}>
            <Text style={styles.boxText}>{item.title}</Text>
            <TouchableOpacity onPress={openCamera}>
              <Ionicons name="camera-outline" size={27} color="white" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.reviewButton}>
        <Text style={styles.buttonText}>Complete Review</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginTop: "5%",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    width: 110,
    height: 110,
    backgroundColor: "#4F46E5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 4,
  },
  boxText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  reviewButton: {
    backgroundColor: "#4F46E5",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CattleEnrollmentReview;
