import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import { store } from './component/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Let's Build Uber Clone with React Native 🚀</Text>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
