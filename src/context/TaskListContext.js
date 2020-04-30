import React, { useState ,useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';
export const TaskListContext = React.createContext();


const TaskListContextProvider = (props) => {

  const initialState = JSON.parse(localStorage.getItem('tasks') )|| []

  const [tasks, setTask] = useState(initialState);

  const [editItem, setEditItem] = useState(null)

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks))
  },[tasks])

  const addTask= (title)=>{
    setTask([...tasks,
    { title :title , id:uuidv4()}   
  ])
  }

  const removeTask = (id) =>{
    setTask(tasks.filter(x=>x.id !== id));
  }

  const clearList =()=>{
    setTask([])
  }

  const findItem =(id)=>{
    const item = tasks.find(x=>x.id === id)
    setEditItem(item)
  }

  const editTask =(title,id)=>{
    const newTasks = tasks.map(x=>(x.id === id ? {title,id} : x));
    setTask(newTasks)
    setEditItem(null)
  }

  return (
    <TaskListContext.Provider value={{ tasks,addTask,removeTask,clearList,findItem,editTask,editItem}}>
      {props.children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
