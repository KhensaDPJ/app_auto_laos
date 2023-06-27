import {View, Text, TouchableOpacity, Animated} from 'react-native';
import React, {useState} from 'react';
import {
  DocumentTextIcon,
  PlusIcon,
  XMarkIcon,
  DocumentCheckIcon,
  ShoppingCartIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
} from 'react-native-heroicons/outline';

const QuickButton = () => {
  const [icon_1] = useState(new Animated.Value(0));
  const [icon_2] = useState(new Animated.Value(0));
  const [icon_3] = useState(new Animated.Value(0));
  const [icon_4] = useState(new Animated.Value(0));
  const [icon_5] = useState(new Animated.Value(0));

  const [text_1] = useState(new Animated.Value(0));
  const [text_2] = useState(new Animated.Value(0));
  const [text_3] = useState(new Animated.Value(0));
  const [text_4] = useState(new Animated.Value(0));
  const [text_5] = useState(new Animated.Value(0));

  const [pop, setPop] = useState(false);

  const popIn = () => {
    setPop(true);

    Animated.timing(icon_1, {
      toValue: 55,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 170,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_4, {
      toValue: 230,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_5, {
      toValue: 290,
      duration: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing(text_1, {
      toValue: 55,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(text_2, {
      toValue: 110,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(text_3, {
      toValue: 170,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(text_4, {
      toValue: 230,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(text_5, {
      toValue: 290,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const popOut = () => {
    setPop(false);
    Animated.timing(icon_1, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_2, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_3, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_4, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(icon_5, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();

    Animated.timing(text_1, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(text_2, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(text_3, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(text_4, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
    Animated.timing(text_5, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      {pop === false ? (
        <TouchableOpacity
          className="items-end mr-4"
          onPress={() => {
            pop === false ? popIn() : popOut();
          }}>
          {pop === false ? (
            <View className="z-50 h-12 w-12  absolute bottom-24 items-center rounded-3xl border-solid border-2 border-[#007C98] shadow-[#007C98] shadow-lg flex-1 justify-center bg-white">
              <PlusIcon size={25} color={'#007C98'} />
            </View>
          ) : (
            <View className="z-50 h-12 w-12  absolute bottom-24 items-center rounded-3xl border-solid border-2 border-[#007C98] shadow-[#007C98] shadow-lg flex-1 justify-center bg-white">
              <XMarkIcon size={25} color={'#007C98'} />
            </View>
          )}
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => setPop(false)}
            className="w-full h-screen bg-black/60 absolute bottom-0"></TouchableOpacity>

          <Animated.View
            className="items-end mr-4"
            style={{bottom: text_1, right: text_1}}>
            <Text className="text-white z-50 absolute text-lg bottom-24 pb-3">
              마이페이지
            </Text>
          </Animated.View>
          <Animated.View
            className="items-end mr-4"
            style={{bottom: text_2, right: text_1}}>
            <Text className="text-white z-50 absolute text-lg bottom-24 pb-3">
              주문내역
            </Text>
          </Animated.View>
          <Animated.View
            className="items-end mr-4"
            style={{bottom: text_3, right: text_1}}>
            <Text className="text-white z-50 absolute text-lg bottom-24 pb-3">
              장바구니
            </Text>
          </Animated.View>
          <Animated.View
            className="items-end mr-4"
            style={{bottom: text_4, right: text_1}}>
            <Text className="text-white z-50 absolute text-lg bottom-24 pb-3">
              최근 본 상품
            </Text>
          </Animated.View>
          <Animated.View
            className="items-end mr-4"
            style={{bottom: text_5, right: text_1}}>
            <Text className="text-white z-50 absolute text-lg bottom-24 pb-3">
              1:1문의
            </Text>
          </Animated.View>

          <Animated.View className="items-end mr-4" style={{bottom: icon_1}}>
            <TouchableOpacity className="z-50 h-12 w-12  absolute bottom-24 items-center rounded-3xl shadow-[#007C98] shadow-lg flex-1 justify-center bg-white">
              <DocumentTextIcon size={25} color={'#007C98'} />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View className="items-end mr-4" style={{bottom: icon_2}}>
            <TouchableOpacity className="z-50 h-12 w-12  absolute bottom-24 items-center rounded-3xl border-solid shadow-lg flex-1 justify-center bg-white">
              <DocumentCheckIcon size={25} color={'#007C98'} />
            </TouchableOpacity> 
          </Animated.View>

          <Animated.View className="items-end mr-4" style={{bottom: icon_3}}>
            <TouchableOpacity className="z-50 h-12 w-12  absolute bottom-24 items-center rounded-3xl border-solid shadow-lg flex-1 justify-center bg-white">
              <ShoppingCartIcon size={25} color={'#007C98'} />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View className="items-end mr-4" style={{bottom: icon_4}}>
            <TouchableOpacity className="z-50 h-12 w-12  absolute bottom-24 items-center rounded-3xl border-solid shadow-lg flex-1 justify-center bg-white">
              <ClockIcon size={25} color={'#007C98'} />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View className="items-end mr-4" style={{bottom: icon_5}}>
            <TouchableOpacity className="z-50 h-12 w-12 absolute bottom-24 items-center rounded-3xl border-solid shadow-lg flex-1 justify-center bg-white">
              <ChatBubbleLeftRightIcon size={25} color={'#007C98'} />
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity
            className="items-end mr-4"
            onPress={() => {
              pop === false ? popIn() : popOut();
            }}>
            {pop === false ? (
              <View className="z-50 h-12 w-12  absolute bottom-24 items-center rounded-3xl border-solid border-2 border-[#007C98] shadow-[#007C98] shadow-lg flex-1 justify-center bg-white">
                <PlusIcon size={25} color={'#007C98'} />
              </View>
            ) : (
              <View className="z-50 h-12 w-12  absolute bottom-24 items-center rounded-3xl border-solid border-2 border-[#007C98] shadow-[#007C98] shadow-lg flex-1 justify-center bg-white">
                <XMarkIcon size={25} color={'#007C98'} />
              </View>
            )}
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default QuickButton;
