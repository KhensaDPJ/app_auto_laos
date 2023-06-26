import {View, Text, FlatList, Animated, Dimensions} from 'react-native';
import React, {useRef, useState} from 'react';
import ImageSlider from './BanerImageSlider';

const Baner = () => {
  const ImageBaner = [
    {
      id: 1,
      image:
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685056752292.png',
    },
    {
      id: 2,
      image: 'https://cdn.auton.kr/auton/o2o/banner/Widget_1687747187854.png',
    },
    {
      id: 3,
      image: 'https://cdn.auton.kr/auton/o2o/banner/Widget_1687747187854.png',
    },
  ];
  const [currentIndex, setCurrenIndex] = useState(0);
  const {width} = Dimensions.get('window');
  //   const [isData,setIsData]=useState(ImageBaner);
  // const fechMore=()=>{
  //   setIsData(prevState=>[...prevState,...Array.from({length:isData.length}).map((_,i)=>i+1+prevState.length)])
  // }

  return (
    <View className="flex-1 justify-center">
      <Text className="text-lg pl-3 pb-3">이벤트</Text>
      <View className="p-3 items-center">
        <FlatList
          data={ImageBaner}
          renderItem={({item}) => <ImageSlider item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrenIndex((x / width).toFixed(0));
          }}
        />
      </View>
      <View className="flex-row w-full justify-center items-center space-x-2 pb-4">
        {ImageBaner.map((data, index) => (
          <View
            key={data.id}
            className={`${
              currentIndex == index
                ? 'h-3 w-10 rounded-full bg-[#007C8A]'
                : 'h-3 w-3 rounded-full bg-[#E1E8ED]'
            }`}></View>
        ))}
      </View>
    </View>
  );
};

export default Baner;
