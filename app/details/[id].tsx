import { Button, Text, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

import React from "react";

const details = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  return (
    <View>
      <Stack.Screen options={{ headerTitle: `detail ${id}` }} />
      <Text>details {id}</Text>
      <Button
        title="Update params"
        onPress={() => router.setParams({ id: 999 })}
      />
    </View>
  );
};

export default details;
