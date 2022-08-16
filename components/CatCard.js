import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const CatCard = ({imgUrl, title}) =>  {
  return (
    <TouchableOpacity className="mr-2 relative">
      <Image
       source={{
        uri:imgUrl
       }}
       className="h-20 w-20 "
      />
      <Text className="absolute bottom-1 left-1 font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CatCard;