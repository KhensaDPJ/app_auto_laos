import { View, TouchableOpacity,SafeAreaView,ScrollView,Image,RefreshControl } from 'react-native'
import React, { useState } from 'react'
import NewProduct from '../components/NewProduct'
import Baner from '../components/Baner'
import { MagnifyingGlassIcon,ListBulletIcon } from 'react-native-heroicons/outline';
import TodayOffer from '../components/TodayOffer';
import RecommendedProduct from '../components/RecommendedProduct';
import Footer from '../components/Footer';

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
        <ScrollView>
        {/* Body */}

        {/* new product */}
        <NewProduct />

        {/* banner */}
        <Baner />
        
        {/* TodayOffer */}
        <TodayOffer/>

        {/* RecommendedProduct */}
        <RecommendedProduct/>

        {/* footer */}
        <Footer/>
      </ScrollView>
    </SafeAreaView>
  </>
  )
}

export default HomeScreen
