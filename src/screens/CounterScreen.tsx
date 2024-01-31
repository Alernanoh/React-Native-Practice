import React, {useState} from 'react';
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {
  const [contador, setContador] = useState(10);
  return (
    <View style={styles.container}>
      <Text style={styles.title}     >
        Contador: {contador}
      </Text>
      <Fab title='-1'/>
      {/* <Button title="Aumentar" 
      onPress={() => setContador(contador + 1)} />
      <Button title="Decrementar"
       onPress={() => setContador(contador - 1)} /> */}

      {/* <TouchableOpacity style={styles.fablocationDecrease} onPress={() => setContador(contador - 1)}> <View style={styles.fabDecrease}>
        <Text style={styles.fabtext}>Decreser</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

//Estilos COmponente
const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  title:{
          textAlign: 'center',
          fontSize: 30,
          // position: 'relative',
          top: -60,
  },
  // button:{
  //         justifyContent: 'center',
  //         fontSize: 80,
  //         backgroundColor: 'cyan',
  //         borderRadius: 100
  // },
  // buttonDecrease:{
  //         backgroundColor: 'red',
  //         borderRadius: 100
  // },
})