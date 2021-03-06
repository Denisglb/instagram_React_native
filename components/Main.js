import React, { Component } from 'react'
import { View, Text } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/action/index'

import { Ionicons } from '@expo/vector-icons';

import { Questions } from "./main/Questions"

const Tab = createBottomTabNavigator();

export class Main extends Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name=" Home " component={Questions}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" size={32} color="blue" />
                        ),
                    }} />
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main)
