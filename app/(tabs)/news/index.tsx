import { Button, View } from "react-native";

import { Link } from "expo-router";
import React from "react";

const index = () => {
  return (
    <View>
      <Link href="./news/42" asChild replace>
        <Button title="Go to 42" />
      </Link>
      <Link href="./news/54" asChild replace>
        <Button title="Go to 54" />
      </Link>
    </View>
  );
};

export default index;
