import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { appImages } from "../../assets/app/images";

import DrawerLabel from "./DrawerLabel";
import {
  Ionicons,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { appData } from "../../assets/app/data";
import { ScrollView } from "react-native-gesture-handler";
import { images } from "../../assets/dummyData";

const DrawerContent = ({ navigation, state, index }: any) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <View style={styles.header}>
        <Image source={images.man} style={styles.logo} />
        {/* <Text style={styles.title}>{appData.orgnizationName}</Text> */}
      </View>


      <DrawerLabel
        focused={state?.index === 0}
        title="Homescreen"
        icon={<Ionicons name="home" size={20} color={COLORS.primary} />}
        navigation={navigation}
      />


      <DrawerLabel
        focused={state?.index === 1}
        title="My Profile"
        icon={<Ionicons name="book" size={20} color={COLORS.primary} />}
        navigation={navigation}
        hasSubMenus
        subMenus={[
          {
            id: 1,
            title: "Profile",
            icon: <Ionicons name="book" size={20} color={COLORS.primary} />,
          },

        ]}
      />


      <DrawerLabel
        focused={state?.index === null} // keep this as null for switches
        title="Logout"
        icon={<Ionicons name="log-out" size={20} color={COLORS.primary} />}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary,
  },
});
