import React, { Component }from 'react';
import { View, Platform ,KeyboardAvoidingView, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class SignIn extends Component{
    state = {
        email: '',
        password:''
    }

    handleSubmit = () =>{

    };


    render(){
        const { email, password } = this.state ;
        return(
            <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding': null} style={styles.container}>
            <View >
                <Text style={styles.title}>
                    Entrar
                </Text>
    
                <Text style={styles.label}>
                    E-MAIL
                </Text>   
                <TextInput
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  autoFocus
                  returnKeyType="next"
                /> 
    
                <Text style={styles.label}>
                    SENHA
                </Text>   
    
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  autoCorrect={false}
                  autoCapitalize="none"
                  underlineColorAndroid="transparent"
                  returnKeyType="send"
                />
    
                <TouchableOpacity onPress={()=>{}} style={styles.button}>
                    <Text style={styles.buttonText}>
                      Entrar
                    </Text>
                </TouchableOpacity>
            </View>
       </KeyboardAvoidingView>
        );
    }
}


