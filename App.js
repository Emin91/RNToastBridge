import React, { Component } from 'react';
import { View, Button } from 'react-native';
import ToastExample from './comp/ToastExample'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Button 
          title='Click to show Toast' 
          onPress={()=>ToastExample.show('Hello Amigos', ToastExample.SHORT)}></Button>
      </View>
    );
  }
}