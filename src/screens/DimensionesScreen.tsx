import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Dimensions} from 'react-native';

Dimensions

export const DimensionesScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxPurple}></View>
        <View style={styles.boxOrange}></View>
    </View>   
  )
}


const styles=StyleSheet.create({
container:{
    width:'100%',
    height: 400,
    backgroundColor: 'red'
},
boxPurple:{
    backgroundColor: 'purple',
    width: '50%',
    height: '50%',

},
boxOrange:{
    backgroundColor: 'orange',
    width: '50%',
    height: '50%'
}
})