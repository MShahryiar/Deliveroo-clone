import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import client from '../sanity'

const FeaturedRow = ({id,title, description}) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(()=>{
    client.fetch(
      `
    *[_type == "featured" && _id == $id]{
      ...,
    restaurants[]->{
      ...,
      dishes[]->,
      type->{
        name
      }
    },
  }[0]
    `,
    {id}
    ).then(data=>{
      setRestaurants(data?.restaurants)
    })
  },[id]);
  // console.log(restaurants)
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
      className="pt-4">


        {/* Restaurant Card */}
        {restaurants?.map((restaurant)=>(
            <RestaurantCard 
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
            />
        ))}
          
      

      
      
    </ScrollView>



    </View>
  )
}

export default FeaturedRow


// {restaurants?.map((restaurant)=>(
//   <RestaurantCard 
//   key={restaurant._id}
//   id={restaurant._id}
//   imgUrl={restaurant.image}
//   title={restaurant.name}
//   rating={restaurant.rating}
//   genre={restaurant.type?.name}
//   address={restaurant.address}
//   short_description={restaurant.short_description}
//   dishes={restaurant.dishes}
//   long={restaurant.long}
//   lat={restaurant.lat}
// />


{/* <RestaurantCard 
          id={123}
          imgUrl="https://links.papareact.com/gn7"
          title="Yo Sushi"
          rating="4.3"
          genre="Japanese"
          address="park lane"
          short_description="Pizza"
          dishes={[]}
          long="124"
          lat="155"
        /> */}