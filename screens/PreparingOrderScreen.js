import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress";
import { useNavigation } from '@react-navigation/native';


const PreparingOrderScreen = () => {

  const navigation = useNavigation();

  useEffect(()=>{
      setTimeout(()=>{
        navigation.navigate("Delivery");
      },2000)
  },[])

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
        <Progress.Circle size={60} indeterminate={true} color="white"/>
    </View>
    </>
  )
}

export default PreparingOrderScreen