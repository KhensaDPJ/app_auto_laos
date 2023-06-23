import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const CardNewProduct = ({id, image, title, price}) => {
  return (
    <TouchableOpacity className="pl-2">
      <View className="w-28 mb-2 p-2 bg-white shadow-sm rounded-sm">
        <Image
          source={{uri: image}}
          resizeMode="stretch"
          className="h-24 rounded-sm"
        />
        <Text numberOfLines={2} ellipsizeMode="tail" className="py-2">
          {title}
        </Text>
        <Text>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardNewProduct;
