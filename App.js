import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'

const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(loading, error, weather)

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
