import React, { useRef } from "react";
import { View, Text, Dimensions, Image, StyleSheet,ScrollView } from "react-native";
import Carousel from "react-native-reanimated-carousel";

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

      <View style={styles.gridContainer}>
        {[...Array(3)].map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.boxText}>Column 1</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxText}>Column 2</Text>
            </View>
          </View>
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
    padding: 10,
    flex: 1,
    width: "90%",
  },
  row: {
    flexDirection: "row",
    marginVertical: 5,
  },
  box: {
    flex: 1,
    backgroundColor: "blue",
    padding: 20,
    margin: 5,
    alignItems: "center",
    height: 150, // Fixed height issue
    justifyContent: "center",
    borderRadius: 10,
  },
  boxText: {
    color: "white",
    fontWeight: "bold",
  },
});
