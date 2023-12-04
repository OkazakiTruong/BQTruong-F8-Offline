import React from "react";
import { Droppable } from "react-beautiful-dnd";

export default function Column({ data, provided, tasks }) {
  return (
    <div className="column">
      <div className="column-header" {...provided.dragHandleProps}>
        <h2 className="heading">{data.columnName}</h2>
        <button>Delete</button>
      </div>
      <Droppable droppableId={data.column}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              background: snapshot.isDraggingOver ? "#ccc" : "white",
            }}
            className="column-body"
          >
            <div className="task-wrapper">
              <div className="task">Task</div>
              <button>Delete</button>
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <div className="column-footer">
        <button>+ Add a new task</button>
      </div>
      {provided.placeholder}
    </div>
  );
}
