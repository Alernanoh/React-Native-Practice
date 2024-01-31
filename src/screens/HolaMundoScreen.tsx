import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
  return (
    <View style={{
      flex: 1,
      //backgroundColor: 'red',
    }} >
      <Text style={{
        textAlign:'center',
        fontSize: 40,
      }}>Hola Mundo!</Text>
    </View>
  )
}
