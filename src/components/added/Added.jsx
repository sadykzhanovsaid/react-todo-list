import React from "react"
import "./Added.css"

function Added({setAdd}) {
    return (
        <div className="added">
            <input type="text" className="added__input" placeholder="Текст задачи"/>
            <div className="added__other">
                <button onClick={() => setAdd(false)} className="added__add">Добавить задачу</button>
                <button onClick={() => setAdd(false)} className="added__cancel">Отмена</button>
            </div>
        </div>
    );
}

export default Added;