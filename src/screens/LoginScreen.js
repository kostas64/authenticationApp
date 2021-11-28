import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{paddingBottom: 5}}>Login Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Go to Home</Text>
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
