import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons"; // For icons
// import Home from "./Components/Landing/Home"; // Correct import path
import Registration from "./Components/User/UserRagistration";
// import HomeHeader from "./Components/HeaderComponent/HomeHeader";
// import CustomHeader from "./Components/HeaderComponent/CustomHeader";
// import UserRegiAadhar from "./Components/User/UserRegiAadhar";
// import { View, Text } from "react-native";
import HomeTabNavigator from "./Components/TabNavigatorComp/HomeTabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import CustomHeader from "./Components/HeaderComponent/CustomHeader";
import Helpdesk from "./App/Help/HelpDesk";
import LoginPage from "./Components/User/LoginPage";
import Home from "./Components/Landing/Home";
import UserRegiAadhar from "./Components/User/UserRegiAadhar";

const Stack = createStackNavigator();

export default function App() {
  return (
    <React.StrictMode>
      <NavigationContainer>
        {/* <Tab.Navigator
        initialRouteName="Home"
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
         <Tab.Screen
          name="Home"
          component={Home}
          options={{
             header: () => <HomeHeader />,
          }}
        />
         <Tab.Screen
          name="Registration"
          component={Registration}
          options={{
            tabBarStyle: { display: "none" },
            header: () => <CustomHeader title="Registration" />,
          }}
        />
      </Tab.Navigator> */}
        <Stack.Navigator initialRouteName="LoginPage">
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="HomeTabs"
            component={HomeTabNavigator}
            options={{ headerShown: false }} // Hide header for tab navigator
          />

          <Stack.Screen
            name="UserRegiAadhar"
            component={UserRegiAadhar}
            options={{ header: () => <CustomHeader title="Aadhar Registration" /> }}
          />

          {/* Add Registration screen */}
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{
              title: "User Registration",
              header: () => <CustomHeader title="Registration" />,
            }} // Example of custom title
          />
          <Stack.Screen
            name="Helpdesk"
            component={Helpdesk}
            options={{ header: () => <CustomHeader title="Helpdesk" /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </React.StrictMode>
  );
}
