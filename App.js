import {
  APIKEY,
  AUTHDOMAIN,
  PROJECTID,
  STORAGEBUCKET,
  MESSAGINGSENDERID,
  APPID,
  MEASUREMENTID
} from '@env'
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import { View, Text } from "react-native";
import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
  measurementId: MEASUREMENTID
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