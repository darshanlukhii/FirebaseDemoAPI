//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import firebase from '@react-native-firebase/app';

// create a component
const App = () => {

    const apiKey = 'AIzaSyASkAutsjqHyJ4JFn263D1od99UR8VQTpA'; // Your Firebase API key
    const projectId = 'demofirebaseapi-46465'; // Your Firebase project ID
    const collectionName = 'data'; // The name of the Firestore collection where you want to add data

    const firestoreBaseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collectionName}?key=${apiKey}`;

    const createData = async () => {
        try {
            const response = await axios.post(
                firestoreBaseUrl,
                {
                    fields: {
                        field1: { stringValue: "144444" },
                        field2: { integerValue: "1555" },
                    },
                }
            );
            console.log('Data created successfully:', response.data);
        } catch (error) {
            console.error('Error creating data:', error);
        }
    };
    useEffect(() => {
        // addDataToFirestore();
        createData()
    }, [])
    return (
        <View style={styles.container}>
            <Text>App</Text>
        </View>
    );
};



// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default App;
