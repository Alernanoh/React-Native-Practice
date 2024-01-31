import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'

//documentación forzada de nuestro componente Fab
interface Props{
    title: string;
    position?: 'bl' | 'br';
    onPress: ()=>void;
}

export const Fab = ({title, position  = 'bl', onPress}: Props) => {

  return (

      <TouchableOpacity  
      style={[styles.fablocation,
    (position == 'bl')  
    ? styles.left
    :styles.right]}
      onPress={onPress}>
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
  fablocation:{
    position:'absolute',
    bottom: 20,
    // left: 10
  }, 
 
   right:{
    right:10
  },
  left: {
    left:10
  }
//   fablocationIncrease:{
//     position:'absolute',
//     bottom: 20,
//     right: 10
//   }
})