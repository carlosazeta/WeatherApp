import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

export const ListItem = ({ date, min, max, condition }) => {
  const { item, dateStyle, temp } = styles
  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color={'white'}/>
      <Text style={dateStyle}>{date}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  dateStyle: {
    color: 'white',
    fontSize: 15
  }
})
