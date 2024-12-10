import { Button, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import React from "react";

const feed = () => {
  const router = useRouter();
  return (
    <View>
      <Stack.Screen options={{ headerTitle: "Feed" }} />
      <Button title="go home" onPress={() => router.back()} />
    </View>
  );
};

export default feed;
