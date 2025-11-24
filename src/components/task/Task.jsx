import React, {useState} from "react"
import "./Task.css"
import deleteIcon from "/public/task/delete.svg"
import {FaCheck} from "react-icons/fa6"
import AutoTextArea from "../autoTextArea/AutoTextArea.jsx";

function Task({
                  el,
                  folders,
                  setFolders,
                  deleteTask,
                  folderId,
                  toggleTaskCompleted
              }) {
    function updateTaskTitle(folderId, taskId, newTitle) {
        if (newTitle) {
            setFolders(el =>
                el.map(folder =>
                    folder.id === folderId
                        ? {
                            ...folder,
                            tasks: folder.tasks.map(task =>
                                task.id === taskId
                                    ? {...task, title: newTitle}
                                    : task
                            )
                        }
                        : folder
                )
            );
        } else if (newTitle === "") {
            deleteTask(folderId, el.id)
        }
    }

    return (
        <div className="task">
            <button
                onClick={() => toggleTaskCompleted(folderId, el.id)}
                className={el.completed ? "task__completed-active" : "task__completed"}>
                <FaCheck className={el.completed ? "task__completed-icon-active" : "task__completed-icon"}
                         size={11}/>
            </button>
            {/*<p className="task__title">{el.title}</p>*/}
            <AutoTextArea
                el={el}
                folderId={folderId}
                updateTaskTitle={updateTaskTitle}
            />
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