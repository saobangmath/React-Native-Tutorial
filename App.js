import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput ,Image} from 'react-native';
import {SearchBar} from 'react-native-elements';
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Korotkevich_ITMO.jpg'}}style={{flex:1}} />
      <View style={{flexDirection:'column', flex:1}}>
          <Text style={styles.text}>Hi I am Tran Anh Tai!</Text>
          <Text style={styles.text}>Hi I am Tran Anh Tai!</Text>
          <Text style={styles.text}>Hi I am Tran Anh Tai!</Text>
          <Text style={styles.text}>Hi I am Tran Anh Tai!</Text>
          <Text style={styles.text}>Hi I am Tran Anh Tai!</Text>
          <Text style={styles.text}>Hi I am Tran Anh Tai!</Text>
          <SearchBar
          placeholder="Type Here ..."
          onChangeText={console.log("HELLO!")}>

          </SearchBar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    flexDirection: 'column',  
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#0f0',
    alignItems: 'center', 
    alignSelf:'center',

  }
});
