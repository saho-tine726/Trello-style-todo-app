import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const Task = ({ task, taskList, setTaskList, index }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Draggable draggableId={task.draggableId} index={index} key={task.id}>
      {(provided) => (
        <div
          className="taskItem"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button
            className="taskDeleteButton"
            onClick={() => handleDelete(task.id)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};
