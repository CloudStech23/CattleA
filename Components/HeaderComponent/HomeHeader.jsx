import { Ionicons } from "@expo/vector-icons"; // For icons
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
    const navigator = useNavigation();
  return (
    <View style={styles.headerContainer}>
      {/* <Ionicons name="notifications-outline" size={25} color="#fff" /> */}
      <TouchableOpacity>
        <Ionicons
          name="person-circle-outline"
          size={32}
          color="#fff"
          style={styles.userIcon}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Welcome &#123;user&#125;</Text>
      <TouchableOpacity style={styles.notificationIcon}>
        <Ionicons name="notifications-outline" size={30} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Registration}>
        <Ionicons onPress={()=> navigator.navigate('Registration')} name="exit-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "", // Distribute items between the text and icons
    alignItems: "flex-end", // Align items vertically in the center
    backgroundColor: "#4b39ef",
    // paddingVertical: 10, // Increased height by increasing padding
    paddingHorizontal: 10,
    height: 90, // Alternatively, you can set a fixed height
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    paddingVertical: 10,
  },
  notificationIcon: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 20,
    paddingVertical: 10,
  },
  Registration: {
    backgroundColor: "transparent",
    position: "absolute",
    right: 60,
    paddingVertical: 10,
  },
  userIcon: {
    marginLeft: 10, // Adjust as needed
    // marginTop: 22, // Align vertically with the text if needed
    paddingVertical: 5,
  },
});

export default HomeHeader;
