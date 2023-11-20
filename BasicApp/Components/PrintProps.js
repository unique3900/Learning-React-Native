import React from 'react'
import { Text, View } from 'react-native'

const PrintProps = ({ route }) => {
    const {props} = route.params;
  return (
    <View>
          <Text>{props}</Text>
    </View>
  )
}

export default PrintProps
