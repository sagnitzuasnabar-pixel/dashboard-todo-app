import { useUserContext } from "../context/user-context"

export const UserSection = () => {
  const { name, role, photo } = useUserContext()

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-sky-900/50 h-25 max-w-2xl justify-around">
      <img 
        src={photo} 
        alt={name}
        className="size-14 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="text-white font-semibold text-lg">{name}</span>
        <span className="text-slate-400 text-sm">{role}</span>
      </div>
    </div>
  )
}