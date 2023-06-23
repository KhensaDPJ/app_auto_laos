import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import CardNewProduct from './CardNewProduct';
import { PlusIcon } from 'react-native-heroicons/outline';

const NewProduct = () => {
  const NewProductData = [
    {
      id: 1,
      image:
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
      title: '[9월출발]라오스 명품3색 골프투어 5일#부영/레이크/롱비엔C.C',
      price: ' 1,360,000 원',
    },
    {
      id: 2,
      image:
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
      title: '[9월출발]라오스 명품3색 골프투어 5일#부영/레이크/롱비엔C.C',
      price: ' 1,360,000 원',
    },
    {
      id: 3,
      image:
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
      title: '[9월출발]라오스 명품3색 골프투어 5일#부영/레이크/롱비엔C.C',
      price: ' 1,360,000 원',
    },
    {
      id: 4,
      image:
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
      title: '[9월출발]라오스 명품3색 골프투어 5일#부영/레이크/롱비엔C.C',
      price: ' 1,360,000 원',
    },
  ];

  const [isRedMore,setIsRedMore]=useState();
  return (
    <View className="p-5">
      <Text className="text-lg">신상품</Text>
      <ScrollView>
        <View className="flex-row flex-wrap bg-red-500">
          {NewProductData.map(data => (
            <CardNewProduct
              key={data.id}
              image={data.image}
              title={data.title}
              price={data.price}
            />
          ))}
        </View>
        <TouchableOpacity className="w-full border-2 border-gray-200 p-4 flex-row space-x-2 items-center justify-center">
          <Text>상품 더보기</Text>
          <PlusIcon size={25} color={'gray'}/>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default NewProduct;
