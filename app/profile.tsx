import { Text, View } from "react-native";

import React from "react";
import { Stack } from "expo-router";

const profile = () => {
  return (
    <View>
      <Stack.Screen options={{ headerTitle: "Profile" }} />
      <Text>profile</Text>
    </View>
  );
};

export default profile;
