import React, { Component } from 'react'


import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';
//import Card
import { Card } from 'react-native-elements';

export default function feed() {
    return (
        <View style={styles.container}>
            <Card title="Local Modules">
                {/*react-native-elements Card*/}
                <Text style={styles.paragraph}>
                    Most likely to fuck a relative?
                </Text>
            </Card>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
});
