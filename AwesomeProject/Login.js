import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'


const Login = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={{alignSelf:'flex-start'}}>Masukkan Username</Text>
        <TextInput placeholder='Username' style={styles.input}></TextInput>
        <Text style={{alignSelf:'flex-start'}}>Masukkan Pasword</Text>
        <TextInput placeholder='Password' style={styles.input}></TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={()=>Alert.alert('Halo')}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>
      </View>
    )
  }
  
  export default Login
  
  const styles = StyleSheet.create({
    title : {
      fontSize:40, 
      fontWeight:'bold', 
      marginBottom:50,
      fontFamily: 'SamsungOneUI-400'
    },
    container : {
      flexDirection: 'column',
      flex: 1,
      backgroundColor:'#FFC312', 
      padding:10, 
      borderRadius:25, 
      alignItems:'center', 
      justifyContent:'center',
      padding:40
    },
    input: {
      width:260, 
      height:50, 
      borderWidth:1, 
      padding:10, 
      borderRadius:20, 
      marginBottom:10
    },
    button: {
      width:200,
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      marginTop: 100,
      borderRadius: 20,
      backgroundColor: '#00FFFF'
    },
  })
  