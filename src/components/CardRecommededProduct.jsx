import { View, Text,Image } from 'react-native'
import React from 'react'

const CardRecommededProduct = ({id,title,price,image}) => {
  return (
        <View className='pl-2'>
          <View className='w-32 space-y-2 bg-white shadow-lg rounded-lg p-2 mb-2 mt-2'>
            <Image source={{uri: image}} className="h-24 w-fit rounded-sm" />
            <Text numberOfLines={2}>{title}</Text>
            <Text>{price}</Text>
          </View>
        </View>
  )
}

export default CardRecommededProduct