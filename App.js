/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
/*import {images, SIZES, COLORS, FONTS} from '../constants';*/
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/images/logo.png')} />

      <Text style={styles.text}>Food for Everyone</Text>

      <Image
        style={styles.background}
        source={require('./assets/images/background2x.png')}
      />

      <View style={styles.submit}>
        <Text style={styles.submitText}> Getting started </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cd5c5c',
  },
  logo: {
    position: 'absolute',
    width: 60,
    height: 60,
    left: 50,
    top: 30,
  },
  text: {
    top: 100,
    left: 50,
    width: 275,
    height: 130,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  background: {
    width: 393,
    height: 420,
    marginTop: 100,
  },

  submit: {
    marginRight: 40,
    marginLeft: 40,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
  },
  submitText: {
    color: '#cd5c5c',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
