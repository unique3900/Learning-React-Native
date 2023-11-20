import React, { useState } from 'react'
import { View,StyleSheet, Text, ScrollView  } from 'react-native'
import TaskItem from './TaskItem';
import AddTask from './AddTask';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
  return (
    <View style={style.container}>
          <Text style={style.heading}>Todo App</Text>
          
          <ScrollView>
              {tasks.map((item, index) => (
                  <View key={index} style={style.taskContainer}>
                      <TaskItem tasks={tasks } setTasks={setTasks} index={index} />
                  </View>
              ))}

<AddTask tasks={tasks} setTasks={setTasks}/>
          </ScrollView>


          
    </View>
  )
}


const style = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:'1.5rem'
    },
    taskContainer: {
        marginTop: '1.4rem',
  
    }
    ,
    heading: {
        color: '#ffff',
        textAlign:'center',
        fontSize: '1.8rem',
        fontWeight:'800'
    }
})

export default Todo
