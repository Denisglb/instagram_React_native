import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import LoginScreen from "./components/auth/Login";
import { View, Text } from "react-native";
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyALPwRcJbvuBDxONIBl6zxz38eTmucQFaA",
  authDomain: "instagram-demo-d2ba3.firebaseapp.com",
  projectId: "instagram-demo-d2ba3",
  storageBucket: "instagram-demo-d2ba3.appspot.com",
  messagingSenderId: "46952580953",
  appId: "1:46952580953:web:2b4b68b98ded259065ae48",
  measurementId: "G-HVQBH4MHL7"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text> Loading</Text>
        </View>
      )

    }

    if (!loggedIn) {
      return (
        <NavigationContainer>{
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name='Landing' component={LandingScreen} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }}></Stack.Screen>
            {/* <Stack.Screen name= 'Login' component ={LoginScreen} options ={{headerShown: false}}></Stack.Screen> */}
          </Stack.Navigator>
        }</NavigationContainer>
      );
    }

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text>User is Logged in </Text>
      </View>
    )
  }

}

export default App