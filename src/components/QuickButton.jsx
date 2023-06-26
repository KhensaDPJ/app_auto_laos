import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronUpIcon } from 'react-native-heroicons/outline';

const QuickButton = () => {
    return (
            <TouchableOpacity className='items-end mr-4 mb-4'>
                <View className='h-12 w-12 bg-white bottom-20 absolute items-center rounded-full border-solid border-2 border-[#007C98] shadow-[#007C98]'>
                    <ChevronUpIcon size={25} color={'#007C98'} />
                </View>
            </TouchableOpacity>
    )
}

export default QuickButton