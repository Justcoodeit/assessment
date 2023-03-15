import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { Globalstyles } from "../../globals/styles";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";
import { ScrollView } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const data = [
  {
    name: "New",
    icon: <Ionicons name="person-add" size={45} color={COLORS.icon} />,
  },
  {
    name: "Phone Book",
    icon: <FontAwesome5 name="address-book" size={45} color={COLORS.icon} />,
  },
  {
    name: "Email",
    icon: <MaterialIcons name="message" size={45} color={COLORS.icon} />,
  },

];

const FeedNavButton = ({
  icon,
  name,
  onPress,
}: {
  icon: any;
  name: string;
  onPress: any;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={styles.feedNavButton}
    >
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {icon}
      </View>
      <Text style={{ fontSize: 14 }}>{name}</Text>
    </TouchableOpacity>
  );
};

const FeedsNav = ({ navigation, onModalPress }: any) => {
  return (
    <View style={[Globalstyles.section]}>
      <Text style={[Globalstyles.sectionHeaderText, { marginBottom: 20, textAlign: 'center', color: '#3356209' }]}>
        Add Contacts
      </Text>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-evenly" }}>
        <FeedNavButton
          name={data[0].name}
          icon={data[0].icon}
          onPress={() => { onModalPress() }}
        />
        <FeedNavButton
          name={data[1].name}
          icon={data[1].icon}
          onPress={() => { }}
        />
        <FeedNavButton
          name={data[2].name}
          icon={data[2].icon}
          onPress={() => { }}
        />
      </View>
    </View>
  );
};

export default FeedsNav;

const styles = StyleSheet.create({
  feedNavButton: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,

  },
});
