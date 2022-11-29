import { StyleSheet } from 'react-native';

export default StyleSheet.create({  
    container: {
        flex: 1,
        alignItems: 'center',
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
  }
);