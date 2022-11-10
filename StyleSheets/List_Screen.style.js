import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: '2%',
        paddingBottom: '2%',
        minHeight: '100%',
    
      },
      list:{
        minHeight: '80%',
        maxHeight: '90%',
        maxWidth: '90%',
        minWidth: '60%',
        borderColor: 'purple',
        borderWidth: 1,
      },
      // listContainer:{
      //   justifyContent:"flex-start",
      //   alignItems:"center"
      // },
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