import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {
  ListBulletIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import NewProduct from '../components/NewProduct';

export class HomeScreen extends Component {
  render() {
    return (
      <>
        <SafeAreaView className="bg-white flex-1">
          <ScrollView>
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

            {/* Body */}

            {/* new product */}
            <NewProduct />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

export default HomeScreen;
