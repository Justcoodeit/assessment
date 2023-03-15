import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../../../constants/color";
import { Globalstyles } from "../../../globals/styles";
import { Formbtn, FormInput } from "../../../components";
import { Formik, Field } from 'formik'

interface AddNewPhoneProps {
    onPress: any;
}

const AddNewPhone = ({ onPress }: AddNewPhoneProps) => {

    return (
        <>
            <View style={Globalstyles.modalContainer}>
                <View style={[styles.card, styles.shawdowProp]}>

                    <Formik
                        initialValues={{
                            name: '',
                            phone: '',
                        }}
                        onSubmit={values => console.log(values)}>

                        {({ handleSubmit, isValid }) => (
                            <>

                                <Field component={FormInput} name="name" placeholder="Name" />

                                <Field component={FormInput} name="phone" placeholder="Phone" />


                                <Formbtn style={[styles.btn]}
                                    onPress={() => { onPress() }}
                                    title='ADD New Contact' />
                            </>
                        )}
                    </Formik>

                </View>
            </View>
        </>
    );
};
const styles = StyleSheet.create({
    card: {

        // backgroundColor: '#ffff',
        borderRadius: 8,
        // paddingVertical: 38,
        // paddingHorizontal: 20,
        width: '100%',
        marginVertical: 10,
        paddingBottom: 25
    },

    btn: {
        marginTop: 28,
        marginLeft: 6
    },
})


export default AddNewPhone;
