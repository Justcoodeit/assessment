import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "../Container";
import { FontAwesome, } from "@expo/vector-icons";
import { COLORS } from "../../constants/color";

const PhonebookCard = ({ name, phone }) => {
    return (
        <View style={styles.phoneContainer}>
            <FontAwesome name="user-circle-o" size={45} color={COLORS.icon} />
            <View style={styles.phoneCol}>
                <Text style={{ marginBottom: 6, fontSize: 17, fontWeight: '700', color: "#2E4053" }}>{name} </Text>
                <Text style={{ fontSize: 14 }}>{phone} </Text>
            </View>
        </View>
    );
};

export default PhonebookCard;

const styles = StyleSheet.create({
    phoneContainer: {
        display: 'flex',
        flexDirection: 'row',
        borderBottomColor: '#ADD8E6',
        borderBottomWidth: 1,
        marginVertical: 1,
        alignItems: 'center'

    },
    phoneCol: {
        flexDirection: "column",
        marginVertical: 10,
        marginHorizontal: 17,




    }

});
