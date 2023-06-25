import { View, Text, Image } from 'react-native'
import React from 'react'

const Baner = () => {
  // const ImageBaner = [
  //   {
  //     id: 1,
  //     image:
  //       'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
  //   },
  //   {
  //     id: 2,
  //     image:
  //       'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
  //   },
  //   {
  //     id: 3,
  //     image:
  //       'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
  //   }
  // ]
  const ImageBaner =[
    'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
    'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
    'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
    'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
  ]
  return (
    <View className='p-3'>
      <Text className='text-lg'>이벤트</Text>
      <View className='p-3 flex-row space-x-5'>

      </View>
    </View>
  )
}

export default Baner