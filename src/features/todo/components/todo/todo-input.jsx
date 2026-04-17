import { useState } from "react"
import { Categories, Priorities } from "../../data/todo-data"

export const TodoInput = ({ onAdd }) => {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("personal")
  const [priority, setPriority] = useState("medium")

  const handleAdd = () => {
    if (title.trim() === "") return
    onAdd(title, category, priority)
    setTitle("")
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="border-none bg-[#f3f3f5] text-black placeholder:text-black/40 px-2 rounded-lg flex-1 min-w-0"
        />
        <button 
          onClick={handleAdd} 
          className="bg-black/50 text-white p-2 rounded-2xl w-20 flex items-center justify-center cursor-pointer shrink-0">
          + Add
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="flex gap-2 items-center">
          <p>Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border-none rounded-sm px-2 py-1 bg-white text-black"
          > 
            {Categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <p>Priority</p>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border-none rounded-sm px-2 py-1 bg-white text-black"
          > 
            {Priorities.map((pri) => (
              <option key={pri.value} value={pri.value}>
                {pri.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}