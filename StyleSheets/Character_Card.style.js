import { StyleSheet } from 'react-native';

export default StyleSheet.create({  
    container: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        maxHeight: '100%',
        minHeight: '40%',
        minWidth: "100%",
        borderColor: 'purple',
        borderWidth: 1,
        backgroundColor: 'pink',
        paddingBottom: "5%",
    },
    card:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red',
        minHeight: '40%',
        maxHeight: '100%',
        width: '100%',
        flex: 1,
        justifyContent: "space-between",
        alignItems: 'center',
        justifyContent: 'center',

        paddingTop: '3%',
        paddingBottom: '3%',
    },    
    row:{
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'red',
        paddingTop: 10,
        minHeight: '10%',
        maxHeight: '40%',
        minWidth: '95%',
        paddingBottom: 5,

        flex: 10,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: 'center',
    },
    box:{
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'blue',
        minHeight: '90%',
        maxWidth: '20%',

        flex:1,
        alignItems:'center',
    },
    button:{
        flex:4,
        alignItems:'center',
        justifyContent: 'center',
        minHeight: '10%',
        width: '60%',
        backgroundColor: 'red',
        margin: 1,
        padding: 5,
    },
    header:{
        fontSize:30,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
        minHeight: "20%"
    },
    subheader:{
        fontSize:20,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
        minHeight: "20%"
    },
    text:{
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
      },
  }
);