import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
  Image,
  Modal,
} from "react-native";
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
  const [storedImages, setStoredImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(null); // Track the selected image for preview

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Camera access is required to take pictures. Please enable it in settings.",
        [
          { text: "Cancel", style: "cancel" },
          { text: "Open Settings", onPress: () => Linking.openSettings() },
        ]
      );
      return false;
    }
    return true;
  };

  const openCamera = async (id) => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      Alert.alert("Image Captured", "Your image has been saved successfully.");
      setStoredImages((prev) => ({
        ...prev,
        [id]: result.assets[0].uri, // Store image for this particular category
      }));
    }
  };

  const removeImage = (id) => {
    setStoredImages((prev) => {
      const updatedImages = { ...prev };
      delete updatedImages[id]; // Remove the image from state
      return updatedImages;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.gridContainer}>
        {imageCategories.map((item) => (
          <View key={item.id} style={styles.box}>
            {storedImages[item.id] ? (
              <>
                {/* Tap image to open full-screen preview */}
                <TouchableOpacity
                  onPress={() => setSelectedImage(storedImages[item.id])}
                >
                  <Image
                    source={{ uri: storedImages[item.id] }}
                    style={styles.image}
                  />
                </TouchableOpacity>

                {/* Remove Image Button */}
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removeImage(item.id)}
                >
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.boxText}>{item.title}</Text>
                <TouchableOpacity onPress={() => openCamera(item.id)}>
                  <Ionicons name="camera-outline" size={27} color="white" />
                </TouchableOpacity>
              </>
            )}
          </View>
        ))}
      </View>

      {/* Modal for Image Preview */}
      <Modal visible={!!selectedImage} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setSelectedImage(null)}
          >
            <Image source={{ uri: selectedImage }} style={styles.fullImage} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedImage(null)}
          >
            <Ionicons name="close-circle" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </Modal>

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
    height: 140, // Increased height to accommodate remove button
    backgroundColor: "#4F46E5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 4,
    padding: 5,
  },
  boxText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  removeButton: {
    backgroundColor: "red",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  removeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
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

  /* Modal Styling */
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalBackground: {
    width: "90%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
  },
});

export default CattleEnrollmentReview;
