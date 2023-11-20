import React, { useContext, useState } from 'react'
import { View,StyleSheet, Text, ScrollView  } from 'react-native'
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import MyContext from '../Context/MyContext';

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const { myState, setMyState } = useContext(MyContext);

  return (
    <View style={style.container}>
          <Text style={style.heading}>Todo App {myState}</Text>
          
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
