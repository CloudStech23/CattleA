import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

function WorklistTabnavigator() {
  const [focusedTab, setFocusedTab] = useState(null); // Track the focused tab
  const navigator = useNavigation();

  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => {
          setFocusedTab("home"); // Set Home as focused
          navigator.navigate("Home");
        }}
      >
        <Ionicons
          name={focusedTab === "home" ? "home" : "home-outline"} // Change icon based on focus
          size={25}
          color={focusedTab === "home" ? "#4b39ef" : "black"} // Change color when focused
        />
        <Text style={[styles.navText, { color: focusedTab === "home" ? "#4b39ef" : "black" }]}>Home</Text> {/* Dynamic color */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => {
          setFocusedTab("tasks"); // Set Tasks as focused
          alert("Tasks Pressed");
        }}
      >
        <FontAwesome5
          name="tasks"
          size={24}
          color={focusedTab === "tasks" ? "#4b39ef" : "black"} // Change color when focused
        />
        <Text style={[styles.navText, { color: focusedTab === "tasks" ? "#4b39ef" : "black" }]}>Tasks</Text> {/* Dynamic color */}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => {
          setFocusedTab("help"); // Set Help as focused
          navigator.push("Helpdesk");
        }}
      >
        <Ionicons
          name={focusedTab === "help" ? "help-circle" : "help-circle-outline"} // Change icon based on focus
          size={25}
          color={focusedTab === "help" ? "#4b39ef" : "black"} // Change color when focused
        />
        <Text style={[styles.navText, { color: focusedTab === "help" ? "#4b39ef" : "black" }]}>Help</Text> {/* Dynamic color */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 49.9,
    backgroundColor: "white",
    boxShadow: "5px 5px 5px 5px rgb(209, 207, 207)", // Shadow for better visibility
  },
  navButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    fontSize: 11,
    fontWeight: 100,
  },
});

export default WorklistTabnavigator;
