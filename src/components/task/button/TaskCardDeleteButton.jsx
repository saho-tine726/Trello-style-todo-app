import React from "react";

export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const handleDelete = (id) => {
    setTaskCardsList(taskCardsList.filter((taskCard) => taskCard.id !== id));
  };

  return (
    <div className="taskCardDeleteButtonArea">
      <button
        className="taskCardDeleteButton"
        onClick={() => handleDelete(taskCard.id)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};
