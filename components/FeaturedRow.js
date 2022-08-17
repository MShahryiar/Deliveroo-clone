import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id,title, description}) => {
  return (
    <View className="py-1">
      <View className="mx-4 flex-row items-center justify-between ">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
     </View>
     <Text className="mx-4 text-xs text-gray-500">{description}</Text>
    
    <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
    >
        {/* Restaurant Card */}\
        <RestaurantCard 
          id="1" 
          imgUrl="imgSrc"
          title="Fake Taxi"
          rating="4.3"
          genre="Italian"
          address="park lane"
          short_description="Pizza"
          dishes={[]}
          long="124"
          lat="155"
        />
    </ScrollView>



    </View>
  )
}

export default FeaturedRow