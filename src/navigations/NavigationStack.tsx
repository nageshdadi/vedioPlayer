import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../blocks/home/Home';
import VideoPlay from '../blocks/videoPage/VideoPlay';
const Stack = createStackNavigator();

export class NavigationStack extends Component {
  render() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VideoPlayer" component={VideoPlay} />
      </Stack.Navigator>
    );
  }
}

export default NavigationStack;
