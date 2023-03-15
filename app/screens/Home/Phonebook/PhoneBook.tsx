import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Container, CustomModal } from "../../../components";
import { PhonebookCard } from "../../../components";
import { FontAwesome5, } from "@expo/vector-icons";
import AddNewPhone from "../component/AddNewPhone";


const Account = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const data = [
        {
            name: 'jesse',
            phone: '0815089083'
        },
        {
            name: 'jesse',
            phone: '0815089083'
        },
        {
            name: 'jesse',
            phone: '0815089083'
        },
        {
            name: 'jesse',
            phone: '0815089083'
        },
    ]


    return (
        <Container>
            <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
                <AddNewPhone
                    onPress={() => setModalVisible(!modalVisible)}
                />
            </CustomModal>

            {
                data.map((item, index) => (
                    <PhonebookCard
                        key={index}
                        name={item.name}
                        phone={item.phone}
                    />
                ))
            }
        </Container>
    );
};

export default Account;

const styles = StyleSheet.create({});
