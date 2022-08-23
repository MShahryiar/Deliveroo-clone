import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { urlFor } from '../sanity'
import {ArrowLeftIcon, ChevronRightIcon, LocationMarkerIcon , StarIcon} from "react-native-heroicons/solid";
import {QuestionMarkCircleIcon} from "react-native-heroicons/outline";


const RestaurantScreen = ({route, navigation}) => {
    const {id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat} = route.params;

    useLayoutEffect(()=>{
        navigation.setOptions({
          headerShown:false,
        })
      },[])

  return (
    <ScrollView>
        <View className="relative">
        <Image
        source={{
          uri: urlFor(imgUrl).url(),
        }}
        className="h-56 w-full bg-gray-300 p-4"
      />

        <TouchableOpacity onPress={()=>navigation.navigate("Home")} className="absolute top-10 left-5 p-2 bg-gray-100 rounded-full">
            <ArrowLeftIcon 
                size={20} 
                color="#00CCBB"                
            />
        </TouchableOpacity>

        </View>
        <View className="bg-white">
        <View className="p-5">
            <Text className="font-bold text-2xl">{title}</Text>
            <View className="flex-row space-x-2 my-1">
                <View className="flex-row items-center space-x-1">
                    <StarIcon color='green' opacity={0.5} size={22}/>
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500">{rating}</Text> . {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <LocationMarkerIcon color="gray" opacity={0.4} size={22}/>
                    <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20}/>
                <Text className="pl-2 flex-1 text-md font-bold">Have a food alergy?</Text>
                <ChevronRightIcon color="#00CCBB" size={20} opacity={1} />
        </TouchableOpacity>
        </View>

    </ScrollView>
  )
}

export default RestaurantScreen