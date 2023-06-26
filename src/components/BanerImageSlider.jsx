import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';

const ImageSlider = ({item}) => {
  return (
    <View>
      <View className="flex px-2 justify-center items-center">
        <Image
          source={{uri: item.image}}
          className="h-[150px] w-80 rounded-md"
          resizeMode="stretch"
        />
      </View>
    </View>
  );
};

export default ImageSlider;
