import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/home'
import AboutScreen from '../screen/about'


const Root = createStackNavigator();

const HomeNavigation = ({navigation}) => {
    return (
      <Root.Navigator initialRouteName="Home">
        <Root.Screen name='Home' component={HomeScreen} />
        <Root.Screen name='About' component={AboutScreen} />
      </Root.Navigator>
        
    )
}

export default HomeNavigation