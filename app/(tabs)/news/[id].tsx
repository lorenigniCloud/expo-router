import { Text, View } from "react-native";

import React from "react";
import { Stack } from "expo-router";
import { useSearchParams } from "expo-router/build/hooks";

const newsDetails = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `detail ${id}` }} />
      <Text>My news: {id}</Text>
    </View>
  );
};

export default newsDetails;
