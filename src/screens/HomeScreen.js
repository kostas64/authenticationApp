import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={{paddingBottom: 10}}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.pop();
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    borderRadius: 15,
    width: 80,
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  buttonText: {
    alignSelf: 'center',
  },
});
