import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import useAuth from '../components/AuthProvider';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text style={{paddingBottom: 5}}>SignUp Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
