import 'react-native-gesture-handler';
import React from 'react'; 
import { StyleSheet, Text, TextInput, View, ScrollView ,Image, FlatList, Button, SectionList} from 'react-native'; // components;
import {Dimensions} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
/**
 * constant variable define;
 */
const image = {uri:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Korotkevich_ITMO.jpg', 
               method: "GET", 
               width:400, height:400, flex:1};

const screen = Dimensions.get('window');

const achievements = [{key:"Google CodeJam champion from 2014-2019"}, 
                      {key:"IOI gold medalist from 2007-2012"}, 
                      {key:"ACM-ICPC World Champion in 2013 and 2015"}, 
                      {key:"Facebook Hacker Cup 2014, 2015 and 2019 winner"},
                      {key:"Yandex algorithm winner in 2010, 2013, 2014, 2015, 2017"},
                      {key:"Snack Down champion in 2018, 2019 (Team)"}];

const winning_match = [{year:2014, data:["Google Code Jam", "Facebook Hacker Cup"]},
                       {year:2015, data:["Google Code Jam", "ICPC World Champion"]},
                       {year:2016, data:["Google Code Jam", "Facebook Hacker Cup"]},
                       {year:2017, data:["Google Code Jam", "Facebook Hacker Cup"]},
                       {year:2018, data:["Google Code Jam", "Google HashCode Champion"]},
                       {year:2019, data:["Google Code Jam", "Facebook Hacker Cup"]},
                      ];
const organizations = [ {name : "Google",   uri: require("./images/Google.png")},
                        {name : "Facebook", uri: require("./images/Facebook.png")},
                        {name : "Yandex",   uri: require("./images/Yandex.png")},
                        {name : "Hackerank",uri: require("./images/Hackerank.png")}   
                      ];
const Stack = createStackNavigator();
var msg = "";
/**
 *  My stack function
 */
function MyStack(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "Home"
          component={Home}
          options={{title:"Welcome"}}
        />
        <Stack.Screen name = "Profile" component = {Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
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

