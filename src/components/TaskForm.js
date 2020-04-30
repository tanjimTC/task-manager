import React,{useContext,useState,useEffect} from "react";
import {TaskListContext} from '../context/TaskListContext'

const TaskForm = () => {
  const {addTask,clearList,editItem,editTask} = useContext(TaskListContext);

  const [title, setTitle] = useState('')

  const handleChange =(e)=>{
    setTitle(e.target.value)
    console.log(title);
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    if(editItem === null){
      addTask(title)
    setTitle('')
    }else{
      editTask(title,editItem.id)
    }
    
  }

  useEffect(()=>{
    if(editItem !== null){
      setTitle(editItem.title)
    }else{
      setTitle('')
    }
  },[editItem])

  return (
    <form className="form" onSubmit={handleSubmit}>
        <input
        onChange={handleChange} 
        value={title}
        type="text" 
        className="task-input" 
        placeholder="Input Task..."
        required
        />
        
        <div className="buttons">
  <button type='submit' className='btn add-task-btn'>{editItem? 'Edit Task' : 'Add Task'}</button>
            <button onClick={clearList} className='btn clear-btn'>clear</button>
        </div>
    </form>
  );
};

export default TaskForm;
