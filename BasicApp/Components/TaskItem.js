import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
const TaskItem = (props) => {
  return (
    <View style={style.taskItem}>
          <Text>{props.index+1}</Text>
          
          <Text>{props.tasks}</Text>
          <TouchableOpacity onPress={() => {
              props.setTasks(props.tasks.filter((item,ind)=>ind!==props.index))
          }}>
                    <MaterialIcons  name="delete" size={18} color='#000' />
            </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    taskItem: {
        backgroundColor:'white',
        color:'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        padding: '10px',
        gap: '0.8rem',
        width: '100vw'
    }
})

export default TaskItem
