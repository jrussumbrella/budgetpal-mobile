import React from 'react';
import { StyleSheet, View, StatusBar, Image } from 'react-native';

import LoginForm from '../components/LoginForm';

import { theme } from '@/theme';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <LoginForm />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.surface,
    flex: 1,
    padding: 15,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
