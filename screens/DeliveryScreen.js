import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {XIcon} from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import * as Progress from "react-native-progress";
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import MapView, {Marker} from 'react-native-maps';


const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <>
    <StatusBar backgroundColor={'#00CCBB'} barStyle={'dark-content'}/>
    <View className="bg-[#00CCBB] flex-1">
      <View className="flex-row justify-between bg-[#00CCBB] items-center p-5">
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <XIcon color="white" size={30}/> 
      </TouchableOpacity>
      <Text className="text-white font-bold text-lg">Order Help</Text>
      </View>

      <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
        <View className="flex-row justify-between">
        <View>
        <Text className="text-lg text-gray-400">Estimated Arrival</Text>
        <Text className="text-4xl font-bold">40-55 Minutes</Text>
        </View>
        <View>
          <Image
            source={{
              uri:"https://links.papareact.com/fls"
            }}
            className="h-20 w-20"
          />
        </View>
      </View>
      <Progress.Bar  size={30} color="#00CCBB" indeterminate={true}/>
      <Text className="mt-5 text-gray-500">You order at {restaurant.title} is being prepared.</Text>
      </View>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta:0.005,
          longitudeDelta:0.005,
        }}
        className="flex-1 mt-10 z-0"
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude:restaurant.lat,
            longitude:restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

    </View>
    </>
  )
}

export default DeliveryScreen