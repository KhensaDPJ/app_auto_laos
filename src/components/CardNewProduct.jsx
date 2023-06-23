import { View, Text,ScrollView,Image,Button} from 'react-native'
import React, { useState } from 'react'

const CardNewProduct = ({id,image,title,price}) => {

    const [isRedMore,setIsRedMore]=useState(false)
  return (
    <View>
      <ScrollView>
        <View className='pl-2'>
        <View className='h-50 w-28 mb-2 p-2 bg-white shadow-sm rounded-md'>
        <Image source={{uri:image}} resizeMode='stretch' className='h-28 w-28' />
        <Text  numberOfLines={2} ellipsizeMode='tail' className='py-2' >{title}</Text>
        <Text>{price}</Text>
        </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default CardNewProduct