import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Topbar from "./components/Topbar"
import Board from "./components/Board"
import DeleteModal from "./components/DeleteModal"
import TaskViewModal from "./components/TaskViewModal"
import AddTaskModal from "./components/AddTaskModal"
import Configuration from "./components/Configuration"

import "./index.css"

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  color: string;
}

function App() {
  const [collapsed, setCollapsed] = useState(false)
  const [page, setPage] = useState<"dashboard" | "configuration">("dashboard")

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showTaskView, setShowTaskView] = useState(false)
  const [showAddTask, setShowAddTask] = useState(false)
  
 
  const [showSingleDelete, setShowSingleDelete] = useState(false)

  const [searchQuery, setSearchQuery] = useState("")

  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Task 1.....", description: "Default Task 1", status: "To Do", color: "#dfff00" }, 
    { id: "2", title: "Task 2.....", description: "Default Task 2", status: "To Do", color: "#49c56e" }, 
    { id: "3", title: "Task 3.....", description: "Default Task 3", status: "In Progress", color: "#e011bd" }, 
    { id: "4", title: "Task 4.....", description: "Default Task 4", status: "In Progress", color: "#ff4d4d" }, 
    { id: "5", title: "Task 5.....", description: "Default Task 5", status: "Done", color: "#40e0d0" },
  ])

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleAddTask = (title: string, description: string, status: string, color: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      status,
      color
    }
    setTasks([...tasks, newTask]) 
    setShowAddTask(false)
  }

  const handleUpdateTask = (newTitle: string, newDesc: string) => {
    if (selectedTask) {
      setTasks(prevTasks => 
        prevTasks.map(t => 
          t.id === selectedTask.id ? { ...t, title: newTitle, description: newDesc } : t
        )
      );
    }
    setShowTaskView(false);
    setSelectedTask(null);
  }

  const handleMoveTask = (taskId: string, newStatus: string) => {
    setTasks(prevTasks => 
      prevTasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t)
    );
  };

 
  const handleTriggerDelete = (task: Task) => {
    setSelectedTask(task);
    setShowSingleDelete(true);
  };

  const handleDeleteSingleTask = () => {
    if (selectedTask) {
      setTasks(prevTasks => prevTasks.filter(t => t.id !== selectedTask.id));
    }
    setShowSingleDelete(false);
    setSelectedTask(null);
  };

  const handleDeleteAll = () => {
    setTasks([]) 
    setShowDeleteModal(false)
  }

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <Sidebar collapsed={collapsed} onMenuChange={setPage} />

      <div className="main">
        {page === "dashboard" && (
          <Topbar
            onToggle={() => setCollapsed(!collapsed)}
            onTrashClick={() => setShowDeleteModal(true)}
            onAddClick={() => setShowAddTask(true)}
            onSearch={setSearchQuery}
          />
        )}

        {page === "dashboard" && (
          <Board 
            tasks={filteredTasks} 
            onTaskClick={(task) => {
              setSelectedTask(task);
              setShowTaskView(true);
            }} 
            onMoveTask={handleMoveTask} 
            onDeleteTask={handleTriggerDelete} 
          />
        )}

        {page === "configuration" && <Configuration />}
      </div>

 
      {showDeleteModal && (
        <DeleteModal
          onClose={() => setShowDeleteModal(false)}
          onConfirm={handleDeleteAll}
        />
      )}

    
      {showSingleDelete && selectedTask && (
        <DeleteModal
          isSingle={true}
          taskTitle={selectedTask.title}
          onClose={() => {
            setShowSingleDelete(false);
            setSelectedTask(null);
          }}
          onConfirm={handleDeleteSingleTask}
        />
      )}

      {showTaskView && selectedTask && !showSingleDelete && (
        <TaskViewModal
          title={selectedTask.title}
          status={selectedTask.status}
          description={selectedTask.description}
          onClose={() => {
            setShowTaskView(false);
            setSelectedTask(null);
          }}
          onSave={handleUpdateTask}
        />
      )}

      {showAddTask && (
        <AddTaskModal
          onClose={() => setShowAddTask(false)}
          onSave={handleAddTask} 
        />
      )}
    </div>
  )
}

export default App