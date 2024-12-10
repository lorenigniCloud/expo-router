import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

// (tabs) is group fro navigation: this allow not to show the value in the url
const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ href: null }} />
      {/* <Tabs.Screen
        name="Tab1"
        options={{
          tabBarLabel: "News feed",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={size} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="news"
        options={{
          headerShown: false,
          tabBarLabel: "Person",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
