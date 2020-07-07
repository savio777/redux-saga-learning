import React from 'react';
import {View, Text} from 'react-native';

import Header from '../components/Header';

export default function Home({navigation}) {
  return (
    <View>
      <Header />
      <Text>Home</Text>
    </View>
  );
}
