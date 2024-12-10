import { Stack } from "expo-router";

const NewsStack = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "NewsFeed" }} />
    </Stack>
  );
};

export default NewsStack;
