import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {signOut} from '../services/userServices';
import {useDispatch} from 'react-redux';

export default function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.padding}>Home Screen</Text>
      <Button title="Sign out" onPress={() => dispatch(signOut())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padding: {paddingBottom: 10},
});
