import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

//documentación forzada de nuestro componente Fab
interface Props{
    title: string;
}

export const Fab = ({title}: Props) => {

  return (

      <TouchableOpacity style={styles.fablocationIncrease} onPress={()=>console.log('Hola')}>
        <View style={styles.fabIncrease}>
        <Text style={styles.fabtext}>{title}</Text>
        </View>
      </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
  fabDecrease:{
          textAlign: 'auto',
          backgroundColor: 'red',
          width: 60,
          height: 70, // unidades, no pixeles
          borderRadius: 100,
          justifyContent: 'center'
  },
  fabIncrease:{
          textAlign: 'auto',
          backgroundColor: 'blue',
          width: 60,
          height: 70, // unidades, no pixeles
          borderRadius: 100,
          justifyContent: 'center'
  },
  fabtext:{
          color: 'white',
          textAlign: 'center',
          fontSize: 14,
          fontWeight: 'bold',
  },
  fablocationDecrease:{
    position:'absolute',
    bottom: 20,
    left: 10
  },
  fablocationIncrease:{
    position:'absolute',
    bottom: 20,
    right: 10
  }
})