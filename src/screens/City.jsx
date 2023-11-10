import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from 'react-native'
import IconText from '../components/IconText'

export const City = () => {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}>
          <Text style={[cityName, cityText]}>London</Text>
          <Text style={[countryName, cityText]}>UK</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName={'user'}
              bodyText={'8000'}
              iconColor={'red'}
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName={'sunrise'}
              bodyText={'10:46:58am'}
              iconColor={'white'}
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName={'sunset'}
              bodyText={'17:23:45'}
              iconColor={'white'}
              bodyTextStyles={riseSetText}
            />
          </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 48,
    fontWeight: 'bold'
  },
  countryName: {
    fontSize: 24
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    color: 'red',
    marginLeft: 7.5
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default City
