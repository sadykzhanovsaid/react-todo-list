import React from "react"
import "./TasksAll.css"
import changeIcon from "/public/tasks/change.svg"
import Task from "../task/Task.jsx"
import Added from "../added/Added.jsx"
import addIcon from "/public/tasks/add.svg"

function TasksAll({
                      add,
                      setAdd,
                      folders,
                      updateFolderTitle
                  }) {
    return (
        <div className="taskAll">
            {folders.map((el) => {
                return (
                    <div key={el.id} className="taskAll__box">
                        <div className="taskAll__title">
                            <input
                                style={{color: el.color.background}}
                                value={el.title}
                                onChange={(e) => updateFolderTitle(e.target.value, el.id)}
                            />
                            <button>
                                <img src={changeIcon} alt="change icon" className="taskAll__change-icon"/>
                            </button>
                        </div>
                        <div className="taskAll__line"></div>
                        <div className="taskAll__">
                            <Task title="Изучить JavaScript" completed={true}/>
                            <Task title="Изучить паттерны проектирования" completed={false}/>
                            <Task title="ReactJS Hooks (useState, useReducer, useEffect и т.д.)" completed={false}/>
                            <Task title="Redux (redux-observable, redux-saga)" completed={false}/>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default TasksAll;