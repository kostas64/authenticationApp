import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableWithoutFeedback,
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
        <TextInput
          style={{borderColor: 'black', borderWidth: 1}}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.padding} />
        <TextInput
          style={{borderColor: 'black', borderWidth: 1}}
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
  padding: {paddingTop: 5},
});
