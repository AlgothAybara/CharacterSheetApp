import { StyleSheet } from 'react-native';

export default StyleSheet.create({  
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: '10%',
    },
    button:{
      alignItems:'center',
      justifyContent: 'center',
      minHeight: '10%',
      width: '60%',
      backgroundColor: 'lightblue',
      color: "black"
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
  }
);