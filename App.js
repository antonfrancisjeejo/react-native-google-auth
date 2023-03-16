import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  async function login() {
    try {
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View>
      <Text>App</Text>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={login}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
