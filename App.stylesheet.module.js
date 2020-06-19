import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    input: {
      textAlign: "center", 
      padding: 10
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',  
        justifyContent: 'center'
    },
    header: {
        color: "red",
        alignSelf: "center",
        fontStyle: "italic",
        fontWeight: "bold",
        fontSize:30,
    },
    section:{
        width:"100%",
        backgroundColor: "#0f0",
        fontSize:20,
        fontWeight:"bold",
        textAlign:"center",
    },
    text:{
        color: '#00f',
        fontSize:16,
        justifyContent:'space-between',
        padding:10,    
        alignItems: 'center', 
        alignSelf:'center',
        marginLeft:10,
    },
    textInput: {
        alignSelf:'flex-start',
        fontSize: 16,
    },
    card:{
        flex : 1,
        alignSelf: 'center',
        width : 40,
        height: 40
    }
  });
  export default styles;