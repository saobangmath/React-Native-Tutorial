import 'react-native-gesture-handler';
import React from 'react'; 
import { StyleSheet, Text, View, ScrollView ,Image, FlatList, SectionList} from 'react-native'; // components;
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {image, screen, achievements, winning_match, organizations}  from './Constants'
/**
 * main app module;
 */
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={image}/>
      <Text style={styles.header}>Gennady Korotkevich</Text>
      
      <ScrollView style={{flexDirection:'column', flex:1}}>
        <View>
            <Text style={styles.section}>Some "decent" achievements:</Text>
             {/* flat list of great achievements  */}
              <FlatList data={achievements} 
                        renderItem={({item})=> 
                        <Text style={styles.text}>{item.key}</Text>}/>
              {/* section list of winning matches; */}
              <SectionList
                sections={winning_match}
                renderItem={({item})=>
                  <Text style={styles.text}>{item}</Text>
                }
                
                renderSectionHeader={({section}) => 
                  <Text style={styles.section}>{section.year}</Text>}
                  keyExtractor={(item, match)=> match
                }
              />
        </View>
        <View>
          <Text style={styles.section}>Big tech companies related</Text>
          {/* flatlist of all organization have participated for competitions*/}
              <FlatList data={organizations}
                    horizontal = {true}
                    renderItem = {({item}) => 
              <View style = {styles.container}>
                <Text style = {styles.text}>{item.name}</Text> 
                <Image source = {item.uri}
                    style = {styles.card}></Image>
              </View>
            }/>
        </View>
      </ScrollView>
    </View>
  );
}
/**
 * rules to define the components styles: from GENERAL to DETAILS
 * position -> color -> size -> 
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',  
    justifyContent: 'center',
  },
  header:{
    color: "red",
    alignSelf: "center",
    fontStyle: "italic",
    fontWeight: "bold", 
    fontSize:30
  },
  section:{
    width:screen.width,
    backgroundColor: "#0f0",
    fontSize:20, 
    fontWeight:"bold",
    textAlign:"center"
  }, 
  text: {
    color: '#00f',
    fontSize:16,
    justifyContent:'space-between',
    padding:10,     
    alignItems: 'center', 
    alignSelf:'center', 
    marginLeft:10
  },
  textInput: {
    alignSelf:'flex-start',
    fontSize: 16,
  },
  card: {
    flex : 1,
    alignSelf: 'center',
    width : 40,
    height: 40,
  }
});

