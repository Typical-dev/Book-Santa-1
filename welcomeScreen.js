import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, KeyboardAvoidingView } from 'react-native'
import db from '.config'
import firebase from 'firebase'

export default class Welcome_Screen extends Component {
    constructor() {
        super();
        this.state = {
            emailID: "",
            password: "",
        }
    }

    userSignUp = async (emailID, password) => {
        firebase.auth().createUserWithEmailAndPassword(emailID, password)
            .then((response) => {
            return Alert.alert('userAddedSucessfully')
            })
            .catch(function (error) {
                var errorCode = error.code
                var errorMessage = error.message
                return Alert.alert(errorMessage)
        })
    }

    userLogin = async (emailID, password) => {
        firebase.auth().signInWithEmailAndPassword(emailID, password)
            .then(() => {
            return Alert.alert('loginSucessfull')
            })
            .catch(function (error) {
                var errorCode = error.code
                var errorMessage = error.message
                return Alert.alert(errorMessage)
        })
    }
    render(){
        return (
            <View style = {styles.container}>
                <View>
                    <Text style = {styles.title}>
                        Book-Santa
                  </Text>
                </View>
                <View>
            <TextInput style = {styles.loginBox} placeholder = "abc@example.com" keyboardType = 'email-address' onChangeText = {() => {
                this.setState({emailID: text})
                    }} />
                     <TextInput style = {styles.loginBox} placeholder = "Enter Password" secureTextEntry = {true} onChangeText = {() => {
                this.setState({password: text})
                    }} />
                    <TouchableOpacity style={styles.button, { marginBottom: 20, marginTop: 20 }} onPress={() => {
                        this.userLogin(this.state.emailID, this.state.password)
                    }}>
                       <Text style={styles.buttonText}>
                            Log-In
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        this.userSignUp(this.state.emailID, this.state.password)
                    }}> 
                        <Text style={styles.buttonText}>
                            Sign-Up
                      </Text>
                    </TouchableOpacity>
                </View>
                
</View>
     )
    }
}