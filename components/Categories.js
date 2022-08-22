import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CatCard from "./CatCard"; 
import client, { urlFor } from '../sanity';
export default function Categories() {


  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    client.fetch
    (`
      *[_type == "category"]
    `).then((data)=>{
      setCategories(data)
    })
  },[])
  console.log(categories)



  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15, 
            paddingTop:10,
        }}
    >
      {categories.map((category)=>(
         <CatCard
          key={category._id}
          imgUrl="https://links.papareact.com/gn7" 
          title={category.name}/>
      ))}
      {/* <CatCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CatCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CatCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CatCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CatCard imgUrl="https://links.papareact.com/gn7" title="Testing"/> */}

    </ScrollView>
  )
}

// {categories?.map((category)=>(
//   <CatCard 
//   id={category._id}
//   imgUrl={urlFor(category.image).url()} 
//   title={category.name}/>

// ))}