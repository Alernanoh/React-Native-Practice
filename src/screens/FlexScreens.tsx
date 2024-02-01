import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const FlexScreens = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box1}> Caja 1</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
        <Text style={styles.box2}> Caja 2</Text>
        <Text style={styles.box3}> Caja 3</Text>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#BC50E2', 
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap'
    },
    box1:{
        // flex: 1,
        fontSize:25,
        borderWidth:2,
        borderColor: 'white',
        color: 'white',
        // alignSelf: 'center'
    },
    box2:{
        // flex: 2,
        fontSize:25,
        borderWidth:2,
        borderColor: 'white',
        color: 'white',
        // alignSelf: 'flex-start'
    },
    box3:{
        // flex: 2,
        fontSize:25,
        borderWidth:2,
        borderColor: 'white',
        color: 'white',
        // alignSelf: 'flex-end'
    }
})