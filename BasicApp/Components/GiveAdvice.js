import axios from "axios"; 
import React, { useEffect, useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const GiveAdvice = () => {

    const [advice, setAdvice] = useState("");
    const adviceGenerator = async() => {
        const {data}=await axios.get(`https://api.adviceslip.com/advice/${Math.floor(Math.random() *  
            (200 - 1 + 1) + 1).toString()}`).catch((err) => {
            setAdvice(err.message)
        })
        setAdvice(data.slip.advice)
    }
    useEffect(() => {
        adviceGenerator()
    }, [])
    
  return (
    <View style={style.container}>
          <Text style={style.mainText}>Your Advice: {advice}</Text>
          <Button title="Another Advice" color={'red'} onPress={() => {
              adviceGenerator()
          }}/>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'center',
        justifyContent:'center'
    },
    mainText: {
        color: 'white',
        fontSize: '1rem',
        fontWeight:'500'
    }
})

export default GiveAdvice
