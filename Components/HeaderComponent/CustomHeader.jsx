import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// Custom Header Component
function CustomHeader({title}) {    
    const navigation = useNavigation();
  return (
    <View style={style.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} style={style.backIcon} />
      </TouchableOpacity>
      <Text style={style.headerTitle}>
        {title}
      </Text>
    </View>
  );
}

export default CustomHeader;

const style = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "", // Distribute items between the text and icons
    alignItems: "flex-end", // Align items vertically in the center
    backgroundColor: "#efeded",
    // paddingVertical: 10, // Increased height by increasing padding
    paddingHorizontal: 10,
    height: 90, // Alternatively, you can set a fixed height
  },
  headerTitle: {
    color: "#5d5c5c",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    paddingVertical: 10,
  },
  backIcon: {
     marginLeft:10,
     paddingVertical:5,
     color:'#5d5c5c'
  },
});
