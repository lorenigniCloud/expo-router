import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import { Drawer } from "expo-router/drawer";
import { useRouter } from "expo-router";

const CustomDrawerContent = (props: any) => {
  const router = useRouter();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="reset navigation"
        onPress={() => router.replace("/")}
      />
    </DrawerContentScrollView>
  );
};
const DrawerLayout = () => {
  return (
    <Drawer drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="news" options={{ headerTitle: "novità" }} />
    </Drawer>
  );
};

export default DrawerLayout;
