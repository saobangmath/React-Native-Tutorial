import React from 'react';
import { StyleSheet, Text, View, ScrollView ,Image, FlatList} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={image}/>
      <View style={{flexDirection:'column', flex:1}}>
        <Text style={styles.header}>Gennady Korotkevich</Text>
        <View>
             {/* flat list component; */}
             <FlatList data={achievements} renderItem={({item})=>
               <Text style={styles.text}>{item.key}</Text>
            }/>
        </View>
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
  header:{
    color: "red",
    fontStyle: "italic",
    alignSelf:'center',
    fontSize:30
  }, 
  text: {
    color: '#00f',
    fontSize:18,
    justifyContent:'space-between',
    padding:10,     
    alignItems: 'center', 
    alignSelf:'flex-start'
  }
});

const image = {uri:'https://upload.wikimedia.org/wikipedia/commons/4/4c/Korotkevich_ITMO.jpg', width:400, height:400, flex:1};
const achievements = [{key:"Google CodeJam champion from 2014-2019"}, 
                      {key:"IOI gold medalist from 2007-2012"}, 
                      {key:"ACM-ICPC World Champion in 2013 and 2015"}, 
                      {key:"Facebook Hacker Cup 2014, 2015 and 2019 winner"},
                      {key:"Yandex algorithm winner in 2010, 2013, 2014, 2015, 2017"}];