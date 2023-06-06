import React from 'react'
import style from "./Todo.module.css"

function Todo() {
  return (
    <div>
        <div className={style.todo}>
            <div className={style.list}>+ Add another list</div>
        </div>
    </div>
  )
}

export default Todo