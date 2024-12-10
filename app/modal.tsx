import { Button, Text, View } from "react-native";
import { Stack, useNavigation } from "expo-router";

import React from "react";

const modal = () => {
  const navigation = useNavigation();
  const isPresented = navigation.canGoBack();
  return (
    <View>
      {isPresented && (
        <Stack.Screen
          options={{
            headerTitle: "modal",
            headerLeft: () => (
              <Button
                title="Close"
                onPress={() => navigation.goBack()}
                color={"#fff"}
              />
            ),
          }}
        ></Stack.Screen>
      )}
      <Text>modal</Text>
    </View>
  );
};

export default modal;
