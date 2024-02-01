import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export const PositionScreens = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.boxGreen}>Hola</Text>
        <Text style={styles.boxOrange}>Hola</Text>
        <Text style={styles.boxBlue}>Hola</Text>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
        //   flex:1,
        backgroundColor: '#BC50E2', 
         width: 300,
         height: 300,
        //  alignItems: 'center',
        //  justifyContent: 'center'
    },
    boxGreen:{
        width:100,
        height:100,
        backgroundColor: '#26EC4D',
        borderWidth:10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
        //position: 'relative',
        //top: 30,
        // left: 50
    },
    boxOrange:{
        width:100,
        height:100,
        backgroundColor: '#DE8719',
        borderWidth:10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
        // top: 0,
        // left: 50
    },
    boxBlue:{
        width:100,
        height:100,
        backgroundColor: '#1990DE',
        borderWidth:10,
        borderColor: 'white',
        position: 'absolute',
        top:0,
        left:0,
        bottom: 0,
        right: 0
    }

})