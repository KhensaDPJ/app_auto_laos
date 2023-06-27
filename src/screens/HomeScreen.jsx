import {
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Text,
} from 'react-native';
import React, {useRef} from 'react';
import NewProduct from '../components/NewProduct';
import Baner from '../components/Baner';
import {
  MagnifyingGlassIcon,
  ListBulletIcon,
  ChevronUpIcon,
} from 'react-native-heroicons/outline';
import TodayOffer from '../components/TodayOffer';
import RecommendedProduct from '../components/RecommendedProduct';
import Footer from '../components/Footer';
import QuickButton from '../components/QuickButton';

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView className="bg-white flex-1">
        {/* Header */}
        <View className="bg-white flex-row p-4 items-center justify-between border-b-2 border-gray-200">
          <TouchableOpacity>
            <ListBulletIcon size={32} color={'gray'} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={{
                uri: 'https://store.gibg.co.kr/resources/GIBG/img/gibg_logo.png',
              }}
              resizeMode="stretch"
              className="h-5 w-56"
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <MagnifyingGlassIcon size={32} color={'gray'} />
          </TouchableOpacity>
        </View>

        <ScrollView ref={(ref)=>{
          ScrollViewRef=ref;
        }}>
          {/* Body */}

          {/* new product */}
          <NewProduct />

          {/* banner */}
          <Baner />

          {/* TodayOffer */}
          <TodayOffer />

          {/* RecommendedProduct */}
          <RecommendedProduct />

          {/* footer */}
          <Footer />
        </ScrollView>
        {/* Go to top button */}
        <TouchableOpacity className="items-end mr-4">
          <View className="h-12 w-12 bg-[#394956] bottom-10 absolute items-center shadow-lg rounded-3xl flex-1 justify-items-center">
            <ChevronUpIcon size={25} color={'white'} />
            <Text className="text-white">TOP</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
      <QuickButton />
    </>
  );
};

export default HomeScreen;
