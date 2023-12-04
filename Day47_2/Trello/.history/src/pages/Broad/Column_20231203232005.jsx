import React from "react";

export default function Column({ data, provided }) {
  return (
    <div className="column">
      <div className="column-header" {...provided.dragHandleProps}>
        <h2 className="heading">{data.columnName}</h2>
        <button>Delete</button>
      </div>
      <div className="column-body">
        <div className="task-wrapper">
          <div className="task">Task</div>
          <button>Delete</button>
        </div>
        <div className="task-wrapper">
          <div className="task">Task</div>
          <button>Delete</button>
        </div>
        <div className="task-wrapper">
          <div className="task">Task</div>
          <button>Delete</button>
        </div>
        <div className="task-wrapper">
          <div className="task">Task</div>
          <button>Delete</button>
        </div>
        <div className="task-wrapper">
          <div className="task">Task</div>
          <button>Delete</button>
        </div>
      </div>
      <div className="column-footer">
        <button>+ Add a new task</button>
      </div>
    </div>
  );
}
