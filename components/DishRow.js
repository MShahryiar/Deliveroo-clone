import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import {MinusCircleIcon, PlusCircleIcon} from "react-native-heroicons/solid";

const DishRow = ({id, name, description, price, image}) => {

    const [isPressed, setIsPressed] = useState(false);

  return (
    <>
    <TouchableOpacity 
    className={`bg-white border p-4 border-gray-400 ${isPressed && "border-b-0"}`}  
    onPress={()=>setIsPressed(!isPressed)}>
            <View className="flex-row">
                <View className="flex-1 or-2">
                    <Text className="text-lg mb-1">{name}</Text>
                    <Text className="text-gray-400">{description}</Text>
                    <View className="flex-row"><Text>Pkr</Text><Text className="font-bold"> : {price}</Text></View>
                </View>
                <View>
                    <Image
                        style={{borderWidth:1, borderColor:'#F3F3F4'}}
                        source={{
                            uri:image?urlFor(image).url():"https://links.papareact.com/gn7",
                            }}
                        className="h-20 w-20 bg-gray-300 p-4"
                    />
                </View>
            </View>
    </TouchableOpacity>
    {isPressed && (
        <View className="bg-white px-4">
            <View className="flex-row items-center space-x-2 pb-3">
                <TouchableOpacity>
                    <MinusCircleIcon color="#00CCBB" size={40}/>
                </TouchableOpacity>
                <Text>0</Text>
                <TouchableOpacity>
                    <PlusCircleIcon color="#00CCBB" size={40}/>
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
    
  )
}

export default DishRow