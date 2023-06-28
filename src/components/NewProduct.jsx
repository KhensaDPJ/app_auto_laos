import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
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
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1687785193552.jpg',
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
    {
      id: 5,
      image:
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
      title: '[9월출발]라오스 명품3색 골프투어 5일#부영/레이크/롱비엔C.C',
      price: ' 1,360,000 원',
    },
    {
      id: 6,
      image:
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
      title: '[9월출발]라오스 명품3색 골프투어 5일#부영/레이크/롱비엔C.C',
      price: ' 1,360,000 원',
    },
    {
      id: 7,
      image:
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
      title: '[9월출발]라오스 명품3색 골프투어 5일#부영/레이크/롱비엔C.C',
      price: ' 1,360,000 원',
    },
    {
      id: 8,
      image:
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
      title: '[9월출발]라오스 명품3색 골프투어 5일#부영/레이크/롱비엔C.C',
      price: ' 1,360,000 원',
    },
    {
      id: 9,
      image:
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
      title: '[9월출발]라오스 명품3색 골프투어 5일#부영/레이크/롱비엔C.C',
      price: ' 1,360,000 원',
    },
  ];
  const [isRedMore, setIsRedMore] = useState(false);

  useEffect(() => {
    NewProductData.length > 3 ? setIsRedMore(true) : setIsRedMore(false)
  }, []);

  return (
    <View className={`${isRedMore ? 'p-3 h-80 pb-7' : 'p-3'}`}>
      <Text className="text-lg mb-3">신상품</Text>
      <ScrollView
        scrollEnabled={isRedMore ? false : true}
        nestedScrollEnabled={false}
        className={`pt-2 ${isRedMore ? 'h-80' : 'pt-2 max-h-[385px]'}`}>
        <View className="flex-row flex-wrap justify-center">
          {NewProductData.map(item => (
            <View key={item.id} className='flex'>
              <CardNewProduct
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => setIsRedMore(prev => !prev)}
        className={`${isRedMore
          ? 'w-full border-2 border-gray-200  flex-row space-x-2 items-center justify-center p-2'
          : 'hidden'
          }`}>
        <Text>상품 더보기</Text>
        <PlusIcon size={25} color={'gray'} />
      </TouchableOpacity>
    </View>
  );
};

export default NewProduct;
