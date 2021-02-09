import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = () => {
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

export default App

const styles = StyleSheet.create({
  title : {
    fontSize:40, 
    fontWeight:'bold', 
    marginBottom:50,
    fontFamily: 'SamsungOneUI-400'
  },
  container : {
    flex:1, 
    backgroundColor:'white', 
    padding:10, 
    borderWidth:2, 
    margin:5, borderRadius:25, 
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
