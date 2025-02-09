import React from "react";
// import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../../App/Landing/Home";
import HomeHeader from "../HeaderComponent/HomeHeader";
// import Registration from "../User/UserRagistration";
import CustomHeader from "../HeaderComponent/CustomHeader";
import CattleEnrollmentReview from "../../App/CattleEnrollment/CattleEnrollmentReview";
import AgentworkList from "../../App/Insurance/AgentworkList";
import Helpdesk from "../../App/Help/HelpDesk";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Enrollment") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          }else if (route.name === "Worklist") {
            iconName = focused ? "list" : "list";
          }else if (route.name === "Helpdesk") {
            iconName = focused ? "help-circle" : "help-circle-outline";
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
        name="Enrollment"
        component={CattleEnrollmentReview}
        options={{
          tabBarStyle: { display: "none" },
          header: () => <CustomHeader title="Cattle Enrollment Review" />,
        }}
      />
      <Tab.Screen
        name="Worklist"
        component={AgentworkList}
        options={{
          tabBarStyle: { display: "none" },
          header: () => <CustomHeader title="Agent worklist" />,
        }}
      />
      
      <Tab.Screen
        name="Helpdesk"
        component={Helpdesk}
        options={{
          tabBarStyle: { display: "none" },
          header: () => <CustomHeader title="Help Desk!" />,
        }}
      />

       

       
    </Tab.Navigator>
  );
}

export default HomeTabNavigator;
