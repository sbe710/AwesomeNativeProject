import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import FormComponent from '../components/form/form.component';

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <FormComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
