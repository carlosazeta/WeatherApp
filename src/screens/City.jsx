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
import moment from 'moment'

export const City = ({ weatherData }) => {
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

  const { name, country, population, sunrise, sunset } = weatherData

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}>
          <Text style={[cityName, cityText]}>{name}</Text>
          <Text style={[countryName, cityText]}>{country}</Text>
          <View style={[populationWrapper, rowLayout]}>
            <IconText
              iconName={'user'}
              bodyText={`Population: ${population}`}
              iconColor={'red'}
              bodyTextStyles={populationText}
            />
          </View>
          <View style={[riseSetWrapper, rowLayout]}>
            <IconText
              iconName={'sunrise'}
              bodyText={moment(sunrise).format('h:mm:ss a')}
              iconColor={'white'}
              bodyTextStyles={riseSetText}
            />
            <IconText
              iconName={'sunset'}
              bodyText={moment(sunset).format('h:mm:ss a')}
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
