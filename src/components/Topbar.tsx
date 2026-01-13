import "./Topbar.css"

type Props = {
  onToggle: () => void
  onTrashClick: () => void
  onAddClick: () => void
  onSearch: (query: string) => void  
}

export default function Topbar({
  onToggle,
  onTrashClick,
  onAddClick,
  onSearch  
}: Props) {
  return (
    <div className="topbar">
    
      <button className="toggle-btn" onClick={onToggle}>☰</button>

      <div className="action-box">
         
        <input 
          className="search-input" 
          placeholder="Search..." 
          onChange={(e) => onSearch(e.target.value)}
        />

        
        <button className="action-btn" onClick={onAddClick}>
          ＋
        </button>

      
        <button
          className="action-btn danger"
          onClick={onTrashClick}
        >
          🗑
        </button>
      </div>
    </div>
  )
}