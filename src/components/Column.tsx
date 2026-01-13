import TaskCard from "./TaskCard"

 
interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  color: string;
}

type Props = {
  title: string
  icon: string
  tasks: Task[]  
  onTaskClick: (task: Task) => void  
  onDeleteTask: (task: Task) => void  
}

export default function Column({ title, icon, tasks, onTaskClick, onDeleteTask }: Props) {
  return (
    <div className="column">
      <div className="column-header">
        <img src={icon} alt={title} />
        <h3>{title}</h3>
      </div>

      <div className="column-taskss">
        
        {tasks
          .filter((task) => task.status === title)
          .map((task) => (
            <TaskCard
              key={task.id}
              id={task.id} 
              title={task.title}
              color={task.color}
              onClick={() => onTaskClick(task)}
              
              onDelete={() => onDeleteTask(task)} 
            />
          ))}
      </div>
    </div>
  )
}