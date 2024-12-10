import { Button, View } from "react-native";
import { Link, Stack } from "expo-router";

import React from "react";

const index = () => {
  return (
    <View>
      <Stack.Screen options={{ headerTitle: "My Home" }} />
      {/* The navigation with Expo router appers like we were on the web */}
      <Link href="/profile" asChild>
        <Button title="open Profile" />
      </Link>
      <Link href="/feed" asChild>
        <Button title="open feed" />
      </Link>
      <Link href="./details/42" asChild>
        <Button title="Open details 42" />
      </Link>
      <Link href="./details/155" asChild>
        <Button title="Open details 155" />
      </Link>
      <Link href="./drawer" asChild replace>
        <Button title="Open Drawer" />
      </Link>
      <Link href="/(tabs)" asChild replace>
        <Button title="Open tabs" />
      </Link>
      <Link href="/modal" asChild>
        <Button title="Open modal" />
      </Link>
    </View>
  );
};

export default index;
