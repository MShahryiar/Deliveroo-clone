import { View, Text, SafeAreaView,StatusBar, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from "@react-navigation/native"
import {UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon} from "react-native-heroicons/outline";
import Categories from '../components/Categories';

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[])

  return (
    <SafeAreaView className="bg-white pt-5">
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
    {/* Header  */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri:"https://links.papareact.com/wru"
          }}
          className="h-7 w-7 bg-gray-100 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon size={20} color="#00CCBB"/>
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB"/>
      </View>
      {/* Search  */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row items-center flex-1 space-x-2 p-3  bg-gray-200">
          <SearchIcon className="" color="gray" size={20 }/>
          <TextInput 
          placeholder='Restaurants and Cuisines'
          keyboardType='default'
          />
          </View>
         <View>
          <AdjustmentsIcon color="#00CCBB"/>        
       </View>
      </View>
        {/* Body  */}
        <ScrollView className="bg-gray-100"
          contentContainerStyle={{
            paddingBottom:100,
          }}
        >
          <Categories/>
        </ScrollView>

   </SafeAreaView>
  )
}

export default Home;