import React, { useRef } from "react";
import { View, Text, Dimensions, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Ionicons } from "@expo/vector-icons";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false, // Reanimated runs in strict mode by default
});

const { width, height } = Dimensions.get("window");

const images = [
  {
    id: "1",
    source: {
      uri: "https://media.istockphoto.com/id/1282514444/photo/cow-udder-large-and-full-and-with-horns-in-the-green-pasture-and-a-blue-sky.jpg?s=612x612&w=0&k=20&c=a2TuO1u4H4wKW7aSizBh7Df8CLA70MEPTcadLfc35bk=",
    },
  },
  {
    id: "2",
    source: {
      uri: "https://media.istockphoto.com/id/1282514444/photo/cow-udder-large-and-full-and-with-horns-in-the-green-pasture-and-a-blue-sky.jpg?s=612x612&w=0&k=20&c=a2TuO1u4H4wKW7aSizBh7Df8CLA70MEPTcadLfc35bk=",
    },
  },
  {
    id: "3",
    source: {
      uri: "https://media.istockphoto.com/id/1282514444/photo/cow-udder-large-and-full-and-with-horns-in-the-green-pasture-and-a-blue-sky.jpg?s=612x612&w=0&k=20&c=a2TuO1u4H4wKW7aSizBh7Df8CLA70MEPTcadLfc35bk=",
    },
  },
];

const Pages = [
  { id: 1, link: "view enrollment clicked", logo: "search", title: "View Enrollment" },
  { id: 2, link: "Register Gaushala clicked", logo: "add-circle", title: "Register Gaushala" },
  { id: 3, link: "verify enrollment clicked", logo: "checkmark-circle", title: "Verify Enrollment" },
  { id: 4, link: "rx prescription clicked", logo: "medkit", title: "Rx Prescription" },
  { id: 5, link: "Insurance clicked", logo: "shield-checkmark", title: "Insurance" },
  { id: 6, link: "Ownership Transfer clicked", logo: "swap-horizontal", title: "Ownership Trf" },
];

export default function Home() {
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.source} style={styles.image} resizeMode="cover" />
    </View>
  );

  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          loop
          width={width}
          height={height * 0.3} // Height adjustment
          autoPlay
          autoPlayInterval={3000}
          data={images}
          scrollAnimationDuration={800}
          renderItem={renderItem}
        />

        {/* Dynamic Grid Layout */}
        <View style={styles.gridContainer} >
          {Pages.map((item) => (
            <TouchableOpacity key={item.id} style={styles.box} onPress={() => alert(item.link)}>
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  scrollContainer: {
    flexGrow: 1,
    marginBottom: 70, // Adjust for bottom spacing
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
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
    alignSelf: "center", // Ensures the grid doesn't expand unnecessarily
    width: "85%",
    marginTop: 10, // Adjust as needed
  },
  box: {
    width: "49%",
    backgroundColor: "blue",
    padding: 20,
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
    marginTop: 5,
  },
});
