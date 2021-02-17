import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('About')}>
        <Text style={{color: 'white'}}>Press Here</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
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