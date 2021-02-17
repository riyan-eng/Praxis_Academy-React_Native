import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'

const Login = () => {
    return (
        <View>
            <View style={styles.containerTitle}>
                <View style={{position: 'absolute'}}>
                    <Text style={styles.title}>Welcome Back</Text>
                </View>
            </View>
            <View style={styles.containerMain}>
                <TextInput placeholder='E-mail or Username' style={styles.input}></TextInput>
                <TextInput placeholder='Password' style={styles.input}></TextInput>
                <Text style={{alignSelf: 'flex-end'}}>Forgot password?</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>Alert.alert('Halo')}>
                  <Text style={{color: 'white'}}>Press Here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    containerTitle: {
        paddingTop:275,
        backgroundColor:'#007575',
        justifyContent: 'center'
        
    },
    title: {
        fontFamily: 'Roboto-Medium',
        fontSize: 50,
        color: 'white',
        width: 250,
        paddingLeft:20,
    },
    input: {
        width:320, 
        height:50, 
        borderWidth:1, 
        borderColor:'#007575',
        backgroundColor:'#E5FFFF',
        padding:10, 
        borderRadius:10,
        marginBottom:20 
    },
    containerMain: {
        alignItems: 'center',
        padding:25,
    },
    button: {
        width:200,
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop: 100,
        borderRadius: 20,
        backgroundColor: '#007575',
    },
})
