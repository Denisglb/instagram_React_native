import React, { Component } from 'react'
import { View, Text } from "react-native";
import { fetchQuestions } from '../../redux/action/index'


export class Questions extends Component {

    componentDidMount() {
        console.log("are we heree??? ");
        fetchQuestions();
    }

    render() {
        return (
            <View>
                <Text>This is the questions page</Text>

            </View>
        )
    }
}


const questions = {
    1: "This is the questions page",
    2: "this is the second question",
    3: "this is the third question"
}

const questionsArray = [

]