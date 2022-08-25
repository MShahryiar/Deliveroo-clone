import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity'

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal);
  const dispatch = useDispatch(); 
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useEffect(()=>{
    const groupedItems = items.reduce((results, item)=>{
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    },{});
    
    setGroupedItemsInBasket(groupedItems);
  },[items])
  return (
    <View className="flex-1">
      <View className=" bg-gray-100">
        <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
          <Text className="text-lg font-bold text-center">Basket</Text>
          <Text className="text-center text-gray-400">{restaurant.title}</Text>
        </View>
        <TouchableOpacity 
        onPress={()=>navigation.goBack()}
        className="absolute top-5 right-5" 
         >
          <XCircleIcon color="#00CCBB" height={40} width={40}/>          
        </TouchableOpacity>

      </View>
      <View className="flex-row items-center space-x-4 py-3 bg-white px-4 my-5">
        <Image
          source={{
            uri:'https://links.papareact.com/wru'
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        /> 
        <Text className="flex-1">Deliver in 50-75 mins</Text>
        <TouchableOpacity><Text className="text-[#4c928d] font-bold">Change</Text></TouchableOpacity>
      </View>
      <ScrollView className="divide-y divide-gray-300">
          {Object.entries(groupedItemsInBasket).map(([key, items])=> (
            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                <Text className="text-[#00CCBB]">{items.length} x </Text>
                <Image
                  source={{
                    uri:"https://links.papareact.com/gn7"
                  }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0]?.name}</Text>
                <Text className="text-gray-600 font-bold">
                  {items[0]?.price }
                </Text>
                <TouchableOpacity onPress={()=>dispatch(removeFromBasket({id:key}))}>
                  <Text className="font-bold text-[#00CCBB]">Remove</Text>
                </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
      
      <View className="p-5 bg-white mt-5 pb-5 space-y-4">
                  <View className="flex-row justify-between">
                    <Text className="text-gray-500">Subtotal</Text>
                    <Text className="text-gray-500">Rs : {basketTotal}</Text>
                  </View>
                  <View className="flex-row justify-between">
                    <Text className="text-gray-500">Delivery Fee</Text>
                    <Text className="text-gray-500">Rs : 80</Text>
                  </View>
                  <View className="flex-row justify-between">
                    <Text className="font-extrabold">Order Total</Text>
                    <Text className="font-extrabold">Rs : {basketTotal + 80}</Text>
                  </View>
                  <View>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("Prepare")}
                    className="bg-[#00CCBB] p-5 rounded-lg items-center">
                      <Text className="text-white text-lg font-bold">Place Order</Text>
                    </TouchableOpacity>
                  </View>
      </View>
    </View>
  )
}

export default BasketScreen