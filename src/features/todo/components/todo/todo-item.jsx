import { Priorities, Categories } from "../../data/todo-data"
import DeleteIcon from "../../../../assets/delete.svg"
import EditIcon from "../../../../assets/editPencil.svg"
import {useState} from "react"

export const TodoItem = ({ todo, onDelete, onToggle,onEdit }) => {

  const [isEditing, setIsEditing] = useState(false)

  const priorityData = Priorities.find((p) => p.value === todo.priority)
  const categoryData = Categories.find((c) => c.value === todo.category)


  return (
    <div className="flex items-center  gap-4 bg-white shadow-2xs p-2 h-19 rounded-lg max-w-2xl pl-3 pr-3">
      
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <div className="flex justify-between w-full gap-15">
        <div className="flex flex-col gap-1">
          {isEditing ? (
            <input
              className="text-black px-2 rounded"
              defaultValue={todo.title}
              onBlur={(e) => {
                onEdit(todo.id, e.target.value)
                setIsEditing(false)
              }}
              autoFocus
            />
          ) : (
            <span className={`transition-all duration-300  ${todo.completed ? "line-through text-slate-400" : "text-black"}`}>
              {todo.title}
            </span>
          )}
          <div className="flex gap-2">
            <span className="bg-gray-200 px-2 rounded-full text-sm text-black ">
              {categoryData.label}
            </span>

            <span className={`${priorityData.color} px-2 rounded-full text-sm`}>
              {priorityData.label}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            className = "cursor-pointer" onClick={() => setIsEditing(true)}>
            <img src= {EditIcon}/>
          </button>

          <button className = "cursor-pointer"onClick={() => onDelete(todo.id)}>
            <img src= {DeleteIcon}/>
          </button>
        </div>
 
      </div>


    </div>
  )
}