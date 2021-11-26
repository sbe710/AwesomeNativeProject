import React from 'react';
import axios from 'axios';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';

interface NewAutoModel {
    autoName: string;
    autoNumber: string;
}

const FormComponent = () => {
    const { handleSubmit, control } = useForm<NewAutoModel>({
        defaultValues: {
            autoName: '',
            autoNumber: '',
        },
    });
    const onSubmit = async (data: NewAutoModel) => {
        console.log(data);
        const res = await axios.get('http://192.168.0.65:3000/api/v1/auto');
        console.log(res.data);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Auto Name</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="autoName"
                rules={{ required: true }}
            />
            <Text style={styles.label}>Auto number</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="autoNumber"
                rules={{ required: true }}
            />

            <View style={styles.button}>
                <Button title="Add new Auto" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    );
};

export default FormComponent;

const styles = StyleSheet.create({
    label: {
        color: 'white',
        margin: 20,
        marginLeft: 0,
    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: '#ec5990',
        borderRadius: 4,
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: Constants.statusBarHeight,
        padding: 16,
        backgroundColor: '#0e101c',
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        padding: 10,
        borderRadius: 4,
    },
});
