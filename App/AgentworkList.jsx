import React from "react";
import { View, Text } from "react-native";
import WorklistTabnavigator from "../Components/TabNavigatorComp/WorklistTabnavigator";

function AgentworkList() {
  return (
    <View style={{ flex: 1, }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "black" }}>AgentworkList</Text>
      </View>
      <WorklistTabnavigator />
    </View>
  );
}

export default AgentworkList;
