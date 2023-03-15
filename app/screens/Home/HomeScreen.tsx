import { ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Container,
  CustomModal,
  FeedsNav,
  HomeHeader,
  LatestUpdatesNav,
  SearchBar,
} from "../../components";
import PhoneBook from "../Home/Phonebook/PhoneBook";
import AddNewPhone from "./component/AddNewPhone";


const HomeScreen = ({ navigation }: any) => {
  const onModalPress = () => {
    setModalVisible(!modalVisible);
  };
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <Container>
      <CustomModal visible={modalVisible} onRequestClose={setModalVisible}>
        <AddNewPhone
          onPress={() => setModalVisible(!modalVisible)}
        />
      </CustomModal>
      <HomeHeader navigation={navigation} />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <FeedsNav navigation={navigation} onModalPress={onModalPress} />
        <SearchBar />
        <PhoneBook />
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
