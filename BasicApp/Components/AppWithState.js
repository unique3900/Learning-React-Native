import React, { useState } from 'react'
import { Alert, Button, ScrollView, Text, View } from 'react-native'

const AppWithState = () => {
    const [num, setNum] = useState(0);
  return (
      <ScrollView>
          <Text style={{fontSize:"2rem",fontWeight:"700"}}>App With State</Text>
          <View style={{
              display: 'flex',
              justifyContent: 'space-around',
              gap: '20px',
              alignItems:'center'
          }}>
              <Text style={{ fontSize: '28px', fontWeight: '600' }} >{num }</Text>
              <View style={{display:'flex',flexDirection:'row', gap:'10px'}}>
                  <Button title='Increase' onPress={() => {
                  setNum(num+1)
              }}/>
                  <Button title='Decrease' color={'red'} onPress={() => {
                num<=0?setNum(0):
                  setNum(num-1)
              }}/>
              </View>
              
            </View>
    </ScrollView>
  )
}

export default AppWithState
