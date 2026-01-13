import "./DeleteModal.css"

type Props = {
  onClose: () => void
  onConfirm: () => void 
  isSingle?: boolean    
  taskTitle?: string    
}

export default function DeleteModal({ onClose, onConfirm, isSingle, taskTitle }: Props) {
  return (
    <div className="modal-overlay">
      
      <div className={isSingle ? "delete-modal-blue" : "modal-box"}>
        
        {isSingle ? (
         
          <>
            <p className="confirm-text">Are you sure you want to delete this task?</p>
            <div className="task-display-box">
              {taskTitle || "Task 1 - Delete"}
            </div>
          </>
        ) : (
           
          <p>
            Are you sure you want to delete all the tasks?
            <span className="danger-text">
              {" "}this action will delete all existing tasks
            </span>
          </p>
        )}

        <div className="modal-actions">
          <button className="btn cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn delete" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}