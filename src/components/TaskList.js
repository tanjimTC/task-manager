import React, { useContext } from "react";
import { TaskListContext } from "../context/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);
  return (
    <div>
      {tasks.length ?(
        <div className="list">
        {tasks.map((x) => {
          return <Task task={x} key={x.id}/>;
        })}
      </div>
      ) :(
        <div className='no-tasks'>No Task</div>
      )}
      
    </div>
  );
};

export default TaskList;
