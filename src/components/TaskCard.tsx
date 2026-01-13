import "./TaskCard.css"

 
type Props = {
  id: string
  title: string
  color?: string 
  onClick?: () => void
  onDelete: (id: string) => void  
}

export default function TaskCard({ id, title, color = "#ffff00", onClick, onDelete }: Props) {
  
 
  const handleDragStart = (e: React.DragEvent) => {
  
    e.dataTransfer.setData("taskId", id);
    e.dataTransfer.effectAllowed = "move";
    
 
    const target = e.currentTarget as HTMLElement;
    target.style.opacity = "0.5";
  };

  const handleDragEnd = (e: React.DragEvent) => {
    const target = e.currentTarget as HTMLElement;
    target.style.opacity = "1";  
  };

 
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();  
    
 
    onDelete(id); 
  };

  return (
    <div 
      className="task-card" 
      onClick={onClick}
      onContextMenu={handleContextMenu} 
      draggable="true"          
      onDragStart={handleDragStart}  
      onDragEnd={handleDragEnd}     
      style={{ backgroundColor: color, cursor: "grab" }} 
    >
      {title}
    </div>
  )
}