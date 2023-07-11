import 'react-native-gesture-handler';
import NavigationStack from './src/navigations/NavigationStack';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    );
  }
}

export default App;
