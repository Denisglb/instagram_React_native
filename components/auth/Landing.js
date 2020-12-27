import React from 'react'
import { Text, View, Button } from 'react-native'

export default function Landing({navigation}) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Button 
            title= "register"
            onPress = {() => navigation.navigate("Register") }>
            </Button>

            <Button 
            title= "Login"
            onPress = {() => navigation.navigate("login") }>
            </Button>
            
        </View>
    )
}
