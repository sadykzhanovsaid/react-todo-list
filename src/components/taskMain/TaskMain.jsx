import React from "react"
import "./TaskMain.css"
import changeIcon from "/public/tasks/change.svg"
import Task from "../task/Task.jsx"
import Added from "../added/Added.jsx"
import addIcon from "/public/tasks/add.svg"

function TaskMain({
                      add,
                      setAdd,
                      folderSelected,
                      folders,
                      updateFolderTitle
                  }) {
    const folderMain = folders.find(el => el.id === folderSelected)
    return (
        <div className="taskMain">
            <div className="taskMain__title" style={{color: folderMain.color.background}}>
                <input
                    style={{color: folderMain.color.background}}
                    value={folderMain.title}
                    onChange={(e) => updateFolderTitle(e.target.value, folderMain.id)}
                />
                <button>
                    <img src={changeIcon} alt="change icon" className="taskMain__change-icon"/>
                </button>
            </div>
            <div className="taskMain__line"></div>
            <div className="taskMain__">
                <Task title="Изучить JavaScript" completed={true}/>
                <Task title="Изучить паттерны проектирования" completed={false}/>
                <Task title="ReactJS Hooks (useState, useReducer, useEffect и т.д.)" completed={false}/>
                <Task title="Redux (redux-observable, redux-saga)" completed={false}/>
            </div>
            {add ? <Added
                add={add}
                setAdd={setAdd}
            /> : <button onClick={() => setAdd(true)} className="taskMain__add">
                <img src={addIcon} alt="add icon" className="taskMain__add-icon"/>
                Новая задача
            </button>}
        </div>
    );
}

export default TaskMain