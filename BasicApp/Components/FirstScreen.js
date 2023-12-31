import React, { useEffect, useState } from 'react'
import { Alert, Button, TextInput } from 'react-native'
import { Image, Text, View } from 'react-native'
import AppWithState from './AppWithState'

const FirstScreen = ({ navigation }) => {

    
    const [text, setText] = useState("")
  return (
    <View style={{
        width: '100%',
        height:'100vh',
        display: 'flex',
        marginTop:'80px',
          flexDirection: 'column',
        justifyContent:'space-around',
        alignItems:'center'
      }}>
        <Text style={{textAlign:'center'}}>Random Text</Text>
        <View>
          <Image  source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 200, height: 200}}
          />
          <Text>Some Another Random Texts</Text>
              <Button title='Take me to the moon' onPress={() => {
                  Alert.alert("Welcome To FirstScreen")
          }}/>
        </View>
  
  
        <AppWithState />
        <View >
          <Text style={{fontSize:'1.2rem',fontWeight:'600'}}>Demonstrating Props Passing</Text>
          <TextInput
            editable
            multiline
            style={{border:'2px solid black',borderRadius:'5px'}}
            placeholder='Enter Text Here'
            value={text}
            onChangeText={(e) => {
              setText(e)
            }}
          />
          <Button title='Pass Props' onPress={() => {
            navigation.navigate('PrintProps',{props:text});
          }}/>
  
        </View>
      </View>
  )
}

export default FirstScreen
