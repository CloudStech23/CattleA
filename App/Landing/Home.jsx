import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const staticImage = {
  uri: "https://media.istockphoto.com/id/1282514033/photo/red-cow-with-dreamy-eyes-and-pink-snout-on-a-blue-background.jpg?s=612x612&w=0&k=20&c=LdHTDl_Xth89HBvjfBjBzRFKo0Z4y72-Y-f9iS4xMVA=",
};

const Pages = [
  {
    id: 1,
    link: "view enrollment clicked",
    logo: "search",
    title: "View Enrollment",
  },
  {
    id: 2,
    link: "Register Gaushala clicked",
    logo: "add-circle",
    title: "Register Gaushala",
  },
  {
    id: 3,
    link: "verify enrollment clicked",
    logo: "checkmark-circle",
    title: "Verify Enrollment",
  },
  {
    id: 4,
    link: "rx prescription clicked",
    logo: "medkit",
    title: "Rx Prescription",
  },
  {
    id: 5,
    link: "Insurance clicked",
    logo: "shield-checkmark",
    title: "Insurance",
  },
  {
    id: 6,
    link: "Ownership Transfer clicked",
    logo: "swap-horizontal",
    title: "Ownership Trf",
  },
];

export default function Home() {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View style={styles.container}>
        {/* Static Image */}
        <View style={styles.itemContainer}>
          <Image
            source={{ uri: staticImage.uri }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        {/* Dynamic Grid Layout */}
        <View style={styles.gridContainer}>
          {Pages.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.box}
              onPress={() => alert(item.link)}
            >
              <Ionicons name={item.logo} size={32} color="white" />
              <Text style={styles.boxText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: "5%",
  },
  scrollContainer: {
    flexGrow: 1,
    marginBottom: 70,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 10,
  },
  image: {
    width: width - 50,
    height: height * 0.25,
    borderRadius: 15,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignSelf: "center",
    width: "85%",
    marginTop: 10,
  },
  box: {
    width: "49%",
    backgroundColor: "blue",
    padding: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 110,
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
  },
});
