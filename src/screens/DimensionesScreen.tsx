import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import {Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');

export const DimensionesScreen = () => {

  //Hook dimension
  const {width, height}=useWindowDimensions();

  return (
    <View >
    <View style={styles.container}>
        <View style={{...styles.boxPurple, width:width*0.50}}></View>
        <View style={styles.boxOrange}></View>
    </View>   
        <Text style={styles.title}>W:{width} - H:{height}</Text>
        </View>
  )
}


const styles=StyleSheet.create({
container:{
    width:'100%',
    height: 200,
    backgroundColor: 'red'
},
boxPurple:{
    backgroundColor: 'purple',
    // width: '50%',
    height: '50%',

},
boxOrange:{
    backgroundColor: 'orange',
    // width: '50%',
    // height: '50%'
},
title:{
  fontSize: 30,
  color: 'blue'
}
})