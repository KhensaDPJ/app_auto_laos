import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ChevronUpIcon, ChevronDownIcon} from 'react-native-heroicons/outline';

const Footer = () => {
  const [upAndDownIconClick, setUpAndDownIconClick] = useState(true);
  return (
    <>
      <View className="w-full bg-[#E1E8ED] p-3">
        <View className="pt-2 flex-row justify-between items-center">
          <Text className="text-base">고객센터 1522 - 5647</Text>
          <TouchableOpacity className="bg-[#007C98] h-8 w-28 justify-center rounded-full">
            <Text className="text-base text-white text-center">고객센터</Text>
          </TouchableOpacity>
        </View>
        <View className="pt-2">
          <Text className="text-base">
            운영시간 : 평일 09:00 ~ 17:00 (점심시간 : 12:00 ~ 13:00)
          </Text>
          <Text className="text-base pl-16">토, 일 및 공휴일 휴무</Text>
        </View>
      </View>
      <View className="w-full h-1 bg-[#A9B7C1]"></View>
      <View className="w-full bg-[#E1E8ED] p-3">
        <Text className="text-base pt-4">
          개인정보처리방침 | 이용약관 | 위치기반서비스 이용약관
        </Text>
        <View className=" pt-4 justify-center items-center">        
          {upAndDownIconClick ? (
            <TouchableOpacity onPress={() => setUpAndDownIconClick(false)} className='flex-row pb-4'>
                <Text className="text-base">오토앤 주식회사 사업자 정보 </Text>
              <ChevronUpIcon size={25} color={'gray'} />
            </TouchableOpacity>
          ) : (
            <>
              <View>
                <TouchableOpacity onPress={() => setUpAndDownIconClick(true)} className='flex-row pb-2'>
                <Text className="text-base">오토앤 주식회사 사업자 정보 </Text>
                  <ChevronDownIcon size={25} color={'gray'} />
                </TouchableOpacity>
                <Text className="text-xs">
                사업자 : 경기 안양시 만안구 전파로24번길 63 오토앤 주식회사
              </Text>
              <Text className="text-xs">
              대표 : 최찬욱 | 상호명 : 오토앤 주식회사
              </Text>
              <Text className="text-xs">
              오토앤 고객센터 : ☎ 1522 - 5647
              </Text>
              <Text className="text-xs">
              개인정보관리책임자 : 현동원 | 메일 : gibg@auton.kr
              </Text>
              <Text className="text-xs">
              사업자등록번호 : 138-81-72768 사업자정보확인
              </Text>
              <Text className="text-xs">
              통신판매업신고번호 : 제2017-안양만안-0384호
              </Text>
              <Text className="text-xs">
              호스팅서비스사업자 : 메가존클라우드(주)
              </Text>
              <Text className="text-xs pt-5 pb-10">
              COPYRIGHT © AUTON ALL RIGHTS RESERVED.
              </Text>
              </View>
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default Footer;
