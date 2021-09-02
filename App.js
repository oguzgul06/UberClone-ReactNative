import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Let's Build Uber Clone with React Native 🚀</Text>
      <StatusBar style="auto"/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  }
})
