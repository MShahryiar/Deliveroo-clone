import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import * as Animatable from "react-native-animatable"


const PreparingOrderScreen = () => {
  return (
    <>
    <StatusBar backgroundColor={'#00CCBB'} barStyle={'dark-content'}/>
    <View className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
          source={require("../assets/deliveroo.gif")}
          animation="slideInUp"
          iterationCount={1}
          className="h-80 w-80"
      />
      <Animatable.Text
      
        animation="slideInUp"
        iterationCount={1}
        className="text-white text-lg font-bold text-center my-10"
      > 
      Waiting for restaurant to accept your order!
        </Animatable.Text>
    </View>
    </>
  )
}

export default PreparingOrderScreen