
import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

const AddTask = (props) => {

    const [task, setTask] = useState('');
  return (
    <KeyboardAvoidingView 
    
    style={styles.container}
  >
    <TextInput style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder={'Write a task'} placeholderTextColor={'#fff'}/>
          <TouchableOpacity onPress={() => {
              props.setTasks([...props.tasks, task])
              setTask('')
    }}>
      <View style={styles.button}>
          <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
      </View>
    </TouchableOpacity>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#3E3364',
        borderWidth: 1,
        marginHorizontal: 20,
        marginTop:'1rem',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,

    },
    inputField: {
        color: '#fff',
        height: 50,
        flex: 1,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
export default AddTask
