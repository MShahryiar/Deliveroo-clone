import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CatCard from "./CatCard"; 
export default function Categories() {
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15, 
            paddingTop:10,
        }}
    >
      <CatCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CatCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CatCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CatCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CatCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>

    </ScrollView>
  )
}