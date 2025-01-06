import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // For icons
import Home from "./Components/Home"; // Correct import path
import Registration from "./Components/User/UserRagistration";
// import UserRegiAadhar from "./Components/User/UserRegiAadhar";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Registration") {
              iconName = focused ? "person-add" : "person-add-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#4b39ef",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Registration" component={Registration} />
        {/* <Tab.Screen name="Aadhar" component={UserRegiAadhar} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
