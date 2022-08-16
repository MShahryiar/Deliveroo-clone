import { View, Text } from 'react-native'
import {useNavigation} from "@react-navigation/native"
import React, { useLayoutEffect } from 'react'

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[])

  return (
    <View>
      <Text className="text-red-500 font-bold">Home</Text>
    </View>
  )
}

export default Home;