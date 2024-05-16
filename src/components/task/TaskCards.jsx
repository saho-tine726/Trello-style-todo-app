import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { TaskCard } from "./TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";

const reorder = (taskCardsList, startIndex, endIndex) => {
  const remove = taskCardsList.splice(startIndex, 1);
  taskCardsList.splice(endIndex, 0, remove[0]);
};

export const TaskCards = () => {
  const taskCardId = uuid();
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: `"${taskCardId}"`,
      draggableId: `taskCard-${taskCardId}`,
    },
  ]);

  const handleDragEnd = (result) => {
    reorder(taskCardsList, result.source.index, result.destination.index);

    setTaskCardsList(taskCardsList);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              />
            ))}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
            />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
