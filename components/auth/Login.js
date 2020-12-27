import React, { Component } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import * as Firebase from 'firebase';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.onSingUp = this.onSingUp.bind(this)
    }

    onSignIn() {
        const { email, password } = this.state;
        Firebase.auth().signInWithEmailAndPassword(email, password)
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
                    placeholder="Email"
                    onChangeText={(email) => this.setState({ email })} />

                <TextInput placeholder="Password"
                    // secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })} />
                <Button
                    onPress={() => { this.onSignIn() }}
                    title="Sign In" />
            </View>
        )
    }
}
