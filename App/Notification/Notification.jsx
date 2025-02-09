import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

function Notification() {
  const NotificationData1 = [
    {
      id: 1,
      icon: "",
      desc: "",
    },
    {
      id: 2,
      icon: "",
      desc: "",
    },
  ];

  const NotificationData2 = [
    {
      id: 1,
      icon: "checkcircle",
      desc: "kajdljffllajl",
    },
    {
      id: 2,
      icon: "user-plus",
      desc: "kadjadfaf",
    },
    {
      id: 3,
      icon: "add-circle",
      desc: "aksjdfja",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.subContainer1}>
        <ScrollView>
          <View style={styles.heading}>
            <Text
              style={{ fontSize: 19, fontWeight: "bold", color: "#f20a0a" }}
            >
              Action Required
            </Text>
            <Text>count</Text>
          </View>
          <View style={styles.ActionRqrd}>
            <Ionicons name="notifications" style={styles.icon}></Ionicons>
            <Text style={styles.Notifications}>hello my name is uday</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.subContainer2}>
        <View style={styles.heading}>
          <Text style={{ fontSize: 19, fontWeight: "bold", color: "#848484" }}>
            Recent Updates
          </Text>
          <Text>count</Text>
        </View>
        {NotificationData2.map((item, index) => {
          return (
            
            <View style={styles.RecentUptd} key={index}>
              <Ionicons name={item.icon} style={styles.icon} />
              <Text style={styles.Notifications}>{item.desc}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: "15%",
    paddingHorizontal: "5%",
  },
  subContainer1: {
    width: "100%",
    height: "30%",
    backgroundColor: "#dcdcdc",
    borderRadius: 10,
    paddingHorizontal: "5%",
  },
  subContainer2: {
    width: "100%",
    height: "50%",
    backgroundColor: "#dcdcdc",
    marginTop: 30,
    borderRadius: 10,
    paddingHorizontal: "5%",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  ActionRqrd: {
    flexDirection: "row",
    // justifyContent: "space-between",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    backgroundColor: "whitesmoke",
    gap: 10,
    borderRadius: 10,
  },
  RecentUptd: {
    flexDirection: "row",
    // justifyContent: "space-between",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    backgroundColor: "whitesmoke",
    gap: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    fontSize: 20,
  },
  Notifications: {
    fontSize: 15,
  },
});
