import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '2%',
        paddingBottom: '2%',
        minHeight: '100%',
    
      },
      list:{
        minHeight: '80%',
        borderColor: 'purple',
        borderWidth: 1,
      },
      button:{
        alignItems:'center',
        justifyContent: 'center',
        minHeight: '10%',
        width: '100%',
        backgroundColor: 'red',
    },
      text:{
        color: 'white',
        fontSize: 20,
      },
      card:{
        height: '2%',
      },    
});