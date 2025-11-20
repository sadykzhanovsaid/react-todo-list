import "react"
import "./Tasks.css"
import Task from "../task/Task.jsx"
import changeIcon from "/public/tasks/change.svg"
import addIcon from "/public/tasks/add.svg"

function Tasks() {
    return (
        <div className="tasks">
            <div className="tasks__title">
                <p>Фронтенд</p>
                <button>
                    <img src={changeIcon} alt="change icon" className="tasks__change-icon"/>
                </button>
            </div>
            <div className="tasks__line"></div>
            <div className="tasks__">
                <Task title="Изучить JavaScript" completed={true}/>
                <Task title="Изучить паттерны проектирования" completed={false}/>
                <Task title="ReactJS Hooks (useState, useReducer, useEffect и т.д.)" completed={false}/>
                <Task title="Redux (redux-observable, redux-saga)" completed={false}/>
            </div>
            <button className="tasks__add">
                <img src={addIcon} alt="add icon" className="tasks__add-icon"/>
                Новая задача
            </button>
        </div>
    )
}

export default Tasks