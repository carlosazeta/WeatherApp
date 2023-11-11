import React, { useState } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'

const App = () => {
  const [loading, setLoading] = useState(false)

  return (
    loading
      ? (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
        )
      : (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
        )
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
