import React from "react"
import okLogo from "../../assets/ok.png"
import deleteLogo from "../../assets/delete.png" 
import { useDispatch } from "react-redux"
import { delTodo, toggleTodo } from "../../store/todoReducer"
const TodoItem = ({ completed, text, id }) => {  
  const dispatch = useDispatch();

  const handleToggle = () => {  
    dispatch(toggleTodo(id))
  }

  const handleDelete = () => {  
    dispatch(delTodo(id))
  }

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "darkslategrey" : "darkkhaki",
    borderRadius: "5px",
    color: completed ? "white" : "black"
  }

  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  )
}

export default TodoItem
