import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import * as Firebase from 'firebase';

export default class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        }

        this.onSingUp = this.onSingUp.bind(this)
    }

    onSingUp() {
        const { email, password, name } = this.state;
        Firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Name"
                    onChangeText={(name) => this.setState({ name })}
                />

                <TextInput
                    placeholder="Email"
                    onChangeText={(email) => this.setState({ email })} />

                <TextInput
                    placeholder="Password"
                    // secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })} 
                    />
                <Button
                    onPress={() => { this.onSingUp() }}
                    title="Sign Up" />
            </View>
        )
    }
}