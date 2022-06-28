import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {signIn} from '../services/userServices';

export default function SignInScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Authentication App</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.padding} />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.padding} />
        <Button
          title="Sign in"
          onPress={() => dispatch(signIn({username, password}))}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    alignSelf: 'center',
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: '700',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
  },
  padding: {paddingTop: 5},
});
