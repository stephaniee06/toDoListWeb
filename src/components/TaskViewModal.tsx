import { useState } from "react"
import "./TaskViewModal.css"

type Props = {
  title: string
  status: string
  description: string
  onClose: () => void
  onSave: (newTitle: string, newDescription: string) => void 
}

export default function TaskViewModal({
  title,
  status,
  description,
  onClose,
  onSave  
}: Props) {
  const [editTitle, setEditTitle] = useState(title)
  const [editDescription, setEditDescription] = useState(description)

 
  const handleSaveAndClose = () => {
    onSave(editTitle, editDescription);  
  };

  return (
    <div className="modal-overlay">
      <div className="task-modal">
        
  
        <div className="task-modal-header">
          <div className="field" style={{ flex: 1 }}>
            <label>Title</label>
            <input
              type="text"
              className="modal-input"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>

          <div className="field">
            <label>Status</label>
            <div>
              <span className="status-pill">{status}</span>
            </div>
          </div>
        </div>

   
        <div className="field">
          <label>Description</label>
          <textarea
            className="modal-textarea"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          />
        </div>

  
        <div className="btn-close-container">
    
          <button className="btn-close-modal" onClick={handleSaveAndClose}>
            Close
          </button>
        </div>

      </div>
    </div>
  )
}