import Column from "./Column"
import todoIcon from "../assets/to-do-list.png"
import runIcon from "../assets/run.png"
import doneIcon from "../assets/check-mark.png"

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  color: string;
}

type Props = {
  tasks: Task[]
  onTaskClick: (task: Task) => void
  onMoveTask: (taskId: string, newStatus: string) => void
  onDeleteTask: (task: Task) => void  
}

export default function Board({ tasks, onTaskClick, onMoveTask, onDeleteTask }: Props) {
  
 
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();  
    e.dataTransfer.dropEffect = "move";
  };
 
  const handleDrop = (e: React.DragEvent, newStatus: string) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    if (taskId) {
      onMoveTask(taskId, newStatus);
    }
  };

  return (
    <div className="board">
  
      <div 
        className="column-wrapper"
        onDragOver={handleDragOver} 
        onDrop={(e) => handleDrop(e, "To Do")}
        style={{ height: '100%', minHeight: '500px' }}  
      >
        <Column 
          title="To Do" 
          icon={todoIcon} 
          tasks={tasks.filter(t => t.status === "To Do")} 
          onTaskClick={onTaskClick} 
          onDeleteTask={onDeleteTask}  
        />
      </div>

      <div 
        className="column-wrapper"
        onDragOver={handleDragOver} 
        onDrop={(e) => handleDrop(e, "In Progress")}
        style={{ height: '100%', minHeight: '500px' }}
      >
        <Column 
          title="In Progress" 
          icon={runIcon} 
          tasks={tasks.filter(t => t.status === "In Progress")} 
          onTaskClick={onTaskClick} 
          onDeleteTask={onDeleteTask}  
        />
      </div>

      <div 
        className="column-wrapper"
        onDragOver={handleDragOver} 
        onDrop={(e) => handleDrop(e, "Done")}
        style={{ height: '100%', minHeight: '500px' }}
      >
        <Column 
          title="Done" 
          icon={doneIcon} 
          tasks={tasks.filter(t => t.status === "Done")} 
          onTaskClick={onTaskClick} 
          onDeleteTask={onDeleteTask}  
        />
      </div>
    </div>
  )
}