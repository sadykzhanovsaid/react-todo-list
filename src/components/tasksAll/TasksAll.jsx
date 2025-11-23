import React from "react"
import "./TasksAll.css"
import changeIcon from "/public/tasks/change.svg"
import Task from "../task/Task.jsx"
import Added from "../added/Added.jsx"
import addIcon from "/public/tasks/add.svg"

function TasksAll({
                      folders,
                      updateFolderTitle,
                      deleteTask
                  }) {
    return (
        <div className="taskAll">
            {folders.map((elFolder) => {
                return (
                    <div key={elFolder.id} className="taskAll__box">
                        <div className="taskAll__title">
                            <input
                                style={{color: elFolder.color.background}}
                                value={elFolder.title}
                                onChange={(e) => updateFolderTitle(e.target.value, elFolder.id)}
                            />
                            <button>
                                <img src={changeIcon} alt="change icon" className="taskAll__change-icon"/>
                            </button>
                        </div>
                        <div className="taskAll__line"></div>
                        <div className="taskAll__">
                            {elFolder.tasks.map((el) => {
                                return <Task
                                    el={el}
                                    key={el.id}
                                    deleteTask={deleteTask}
                                    folderId={elFolder.id}
                                />
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default TasksAll;