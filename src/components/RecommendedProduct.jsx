import { View, Text,Dimensions,ScrollView,TouchableOpacity} from 'react-native'
import React,{useState,useEffect} from 'react'
import CardRecommededProduct from './CardRecommededProduct';

const RecommendedProduct = () => {
  const RdcommendedData = [
    {
      id: 1,
      image:
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685055606343.jpg',
      title: '[9월출발]라오스 명품3색 골프투어 5일#부영/레이크/롱비엔C.C',
      price: ' 1,360,000 원',
    },
    {
      id: 2,
      image:
        'https://cdn.auton.kr/auton/o2o/productImage/productImage_1685200426874.png',
      title: '[9월출발]라오스 명품3색 골프투어 5일#부영/레이크/롱비엔C.C',
      price: ' 1,360,000 원',
    }]
  const [currentIndex, setCurrenIndex] = useState(0);
  const {width} = Dimensions.get('window');
  
  const [checkDataList,setCheckDataList]=useState(false);

  useEffect(() => {
    RdcommendedData.length > 3 ? setCheckDataList(true) : setCheckDataList(false)
  }, []);
  return (
<View className="p-3 flex-1">
  <View className='flex-row justify-between'>
  <Text className="text-lg pb-3">MD 추천상품</Text>
      <TouchableOpacity>
      <Text className="text-lg pb-3 text-[#007C98] underline">전체보기</Text>
      </TouchableOpacity>
  </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;
          setCurrenIndex((x / (width/4)).toFixed(0));
        }}>
        {RdcommendedData.map(data => (
          <CardRecommededProduct
            key={data.id}
            id={data.id}
            title={data.title}
            image={data.image}
            price={data.price}
          />
        ))}
      </ScrollView>
      {checkDataList ? <View className="flex-row w-full justify-center items-center space-x-2 pb-4">
        {RdcommendedData.map((data, index) => (
          <View
            key={data.id}
            className={`${
              currentIndex == index
                ? 'h-3 w-10 rounded-full bg-[#007C8A]'
                : 'h-3 w-3 rounded-full bg-[#E1E8ED]'
            }`}></View>
        ))}
      </View>:''}
    </View>
  )
}

export default RecommendedProduct