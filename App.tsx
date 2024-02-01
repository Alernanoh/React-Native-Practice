import React from 'react';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { CounterScreen } from './src/screens/CounterScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreens } from './src/screens/PositionScreens';
import { FlexScreens } from './src/screens/FlexScreens';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
     {/* <HolaMundoScreen/>
     <CounterScreen/> */}
    {/* <BoxObjectModelScreen/> */}
    {/* <DimensionesScreen/> */}
        {/* <PositionScreens/> */}
        <FlexScreens/>
    </SafeAreaView>
  )
}
