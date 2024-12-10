import { Button, View } from "react-native";

import { Link } from "expo-router";
import React from "react";

const Tab2 = () => {
  return (
    <View>
      <Link href="/" asChild replace>
        <Button title="Reset Nav" />
      </Link>
    </View>
  );
};

export default Tab2;
