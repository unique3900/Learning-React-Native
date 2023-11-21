import React, { useRef } from 'react'
import { Animated, Button, StyleSheet, Text, View } from 'react-native'

const Animateds = () => {

  const fadeIn = useRef(new Animated.Value(0)).current;
  const fadeInAnimation = () => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true
    }).start()
  }

  const fadeOutAnimation = () => {
    Animated.timing(fadeIn, {
      toValue: 0,
      duration: 3000,
      useNativeDriver:true
      }).start()
  } 
  return (
  
    <View style={styles.container}>

      <Animated.View style={[styles.animBox,{opacity:fadeIn}]}>
        <Text style={{color:'white'}}>Fading Animation</Text>
      </Animated.View>
      

      <Button title='Fade In' onPress={fadeInAnimation}/>
      <Button title='Fade Out' onPress={fadeOutAnimation} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap:'20px'
  },
  animBox: {
    backgroundColor: 'blue',
    fontSize: '1rem',
    fontWeight: 700,
    padding:'10px'
  }
})
export default Animateds
