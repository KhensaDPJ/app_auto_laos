import {View, Text, ScrollView, Dimensions} from 'react-native';
import React, {useState,useEffect} from 'react';
import CardTodayOffer from './CardTodayOffer';

const TodayOffer = () => {
  const TodayOfferData = [
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
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685200426874.png',
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
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685200426874.png',
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
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685055606343.jpg',
      title: '[9월출발]라오스 명품3색 골프투어 5일#부영/레이크/롱비엔C.C',
      price: ' 1,360,000 원',
    },
  ];
  const [currentIndex, setCurrenIndex] = useState(0);
  const {width} = Dimensions.get('window');
  
  const [checkDataList,setCheckDataList]=useState(false);

  useEffect(() => {
    TodayOfferData.length > 3 ? setCheckDataList(true) : setCheckDataList(false)
  }, []);
  

  return (
    <View className="p-3 flex-1">
      <Text className="text-lg pb-3">오늘의 제안 상품</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrenIndex((x / (width/4)).toFixed(0));
        }}>
        {TodayOfferData.map(data => (
          <CardTodayOffer
            key={data.id}
            id={data.id}
            title={data.title}
            image={data.image}
            price={data.price}
          />
        ))}
      </ScrollView>
      {checkDataList ? <View className="flex-row w-full justify-center items-center space-x-2 pb-4">
        {TodayOfferData.map((data, index) => (
          <View
            key={data.id}
            className={`${
              currentIndex == index
                ? 'h-2 w-8 rounded-full bg-[#007C8A]'
                : 'h-2 w-2 rounded-full bg-[#E1E8ED]'
            }`}></View>
        ))}
      </View>:''}
    </View>
  );
};

export default TodayOffer;
