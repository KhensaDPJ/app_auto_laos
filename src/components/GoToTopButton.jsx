import { View, Text,TouchableOpacity } from 'react-native'
import React,{useRef,useState} from 'react'
import {ChevronUpIcon} from 'react-native-heroicons/outline';

const GoToTopButton = () => {
  return (
    <TouchableOpacity className='items-end mr-4'>
    <View className='h-12 w-12 bg-[#394956] bottom-10 absolute items-center shadow-lg rounded-3xl flex-1 justify-items-center'>
    <ChevronUpIcon size={25} color={'white'} />
    <Text className='text-white'>TOP</Text>
    </View>
</TouchableOpacity>
  )
}

export default GoToTopButton
