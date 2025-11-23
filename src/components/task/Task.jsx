import React, {useState} from "react"
import "./Task.css"
import deleteIcon from "/public/task/delete.svg"
import {FaCheck} from "react-icons/fa6"

function Task({
                  el,
                  deleteTask,
                  folderId
              }) {
    return (
        <div className="task">
            <button
                className={el.completed ? "task__completed-active" : "task__completed"}>
                <FaCheck className={el.completed ? "task__completed-icon-active" : "task__completed-icon"}
                         size={11}/>
            </button>
            <p className="task__title">{el.title}</p>
            <img
                src={deleteIcon}
                alt="delete icon"
                className="task__delete"
                onClick={() => deleteTask(folderId, el.id)}
            />
        </div>
    );
}

export default Task;