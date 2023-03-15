import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { COLORS } from "../constants/color";
import DrawerContent from "./components/DrawerContent";

import {
  HomeScreen
} from "../screens";
import Profile from "../screens/Profile/Profile";
import BottomNav from "./BottomNav";

const Drawer = createDrawerNavigator();

const { width } = Dimensions.get("window");

const DrawerNav = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: "white",
            width: width * 0.7,
          },
          drawerActiveTintColor: COLORS.primary,
        }}
        drawerContent={(props: any) => <DrawerContent {...props} />}
      >

        <Drawer.Screen name="News" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={Profile} /> 


      </Drawer.Navigator>
    </>
  );
};
export default DrawerNav;

const styles = StyleSheet.create({});
