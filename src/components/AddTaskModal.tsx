import { useState } from "react"
import "./TaskViewModal.css"

type Props = {
  onClose: () => void
  onSave: (title: string, desc: string, status: string, color: string) => void
}

export default function AddTaskModal({ onClose, onSave }: Props) {
 
  const [title, setTitle] = useState("") 
  const [desc, setDesc] = useState("")
  const [status, setStatus] = useState("To Do")
  const [color, setColor] = useState("#49c56e") 

  const handleSave = () => {
    if (title.trim() === "") {
      alert("Title tidak boleh kosong!");
      return;
    }
    onSave(title, desc, status, color);
  };

  return (
    <div className="modal-overlay">
      <div className="task-modal">
        <div className="task-modal-header" style={{ display: 'flex', gap: '20px' }}>
          <div className="field" style={{ flex: 1 }}>
            <label>Title</label>
            <input 
              type="text" 
              placeholder="Task Title Create 1"
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
          </div>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <div className="field">
              <label>Status</label>
              <select 
                className="status-pill" 
                value={status} 
                onChange={(e) => setStatus(e.target.value)}
                style={{ border: 'none', cursor: 'pointer' }}
              >
                <option value="To Do">To Do</option>
                <option value="In Progress">In Progress</option>
                <option value="Done">Done</option>
              </select>
            </div>

            <div className="field">
              <label>Color</label>
              <div style={{ position: 'relative', width: '32px', height: '32px' }}>
                <div 
                  style={{ 
                    backgroundColor: color, 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '6px',
                    border: '2px solid white'
                  }} 
                />
                <input 
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: 0,
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="field">
          <label>Description</label>
          <textarea 
            placeholder="Task Description Create 1"
            value={desc} 
            onChange={(e) => setDesc(e.target.value)} 
          />
        </div>

        <div className="btn-close-container" style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
          <button 
            className="btn-close-modal" 
            style={{ background: '#ff4d4d', color: 'white', fontWeight: 'bold' }} 
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="btn-close-modal" 
            style={{ background: '#f5f5f5', color: '#333', fontWeight: 'bold' }}
            onClick={handleSave} 
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}