import React, { Component } from 'react'
import { View, Text } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchUser } from '../redux/action/index'

import FeedScreen  from "./main/feed";

const Tab = createBottomTabNavigator();

export class Main extends Component {
    componentDidMount() {
        this.props.fetchUser();

    }
    render() {
        const { currentUser } = this.props;

        console.log(currentUser)
        if (currentUser == undefined) {
            return (
                <View></View>
            )
        }
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text>{currentUser.name} is Logged in </Text>
            </View>
        )
        
        // return (
        //     <Tab.Navigator>
        //         <Tab.Screen name="Feed" component={FeedScreen} />
        //     </Tab.Navigator>
        // )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})
const mapDispatchProps = (dispatch) => bindActionCreators({ fetchUser }, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main)
