import React from 'react'; 
import { StyleSheet, Text, TextInput, View, ScrollView ,Image, FlatList, Button, SectionList} from 'react-native'; // components;
import {Dimensions} from 'react-native';
/**
 * constant variable define;
 */
const image = {uri:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Korotkevich_ITMO.jpg', width:400, height:400, flex:1};
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

var msg = "";
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
             {/* flat list component; */}
              <FlatList data={achievements} renderItem={({item})=>
                 <Text style={styles.text}>{item.key}</Text>}/>
              {/* section list component; */}
              <SectionList
                sections={winning_match}
                renderItem={({item})=>
                  <Text style={styles.text}>{item}</Text>
                }
                
                renderSectionHeader={({section}) => 
                <Text style={styles.section}>{section.year}</Text>}
                keyExtractor={(item, match)=> match}
              />
        </View>
      </ScrollView>

      <View style={styles.button}>
        <Button 
                onPress={() =>{
                  alert(msg);
                }}
                title="PRESS ME"
        />
      </View>
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
    alignSelf:'center'
  },
  textInput: {
    alignSelf:'flex-start',
    fontSize: 16,
  },
  button:{
    alignSelf:"center",
    bottom: 10,
    backgroundColor:'#00aeef', 
    width: screen.width / 3,
    fontWeight: "bold"
  }
});

