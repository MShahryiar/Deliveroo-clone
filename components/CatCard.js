import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CatCard = ({imgUrl, title}) =>  {
  return (
    <TouchableOpacity className="mr-2 relative bg-slate-800 opacity-7">
      
      <Image
        source={{
          uri:imgUrl?urlFor(imgUrl).url():"https://links.papareact.com/gn7",
          
        }}
        className="h-20 w-20"
      />
      <Text className="absolute bottom-1 left-1  font-bold text-white">{title}</Text>
      {console.log(imgUrl)}
    </TouchableOpacity>
    
  )
}

export default CatCard;