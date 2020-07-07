import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>last todo: </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 40,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#7d7d7d',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTitle: {
    textAlign: 'center',
    color: '#000',
  },
});
