import logo from "../assets/logo.png"
import homeIcon from "../assets/home.png"
import gearIcon from "../assets/gear.png"

type Props = {
  collapsed: boolean
  onMenuChange: (page: "dashboard" | "configuration") => void
}

export default function Sidebar({ collapsed, onMenuChange }: Props) {
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      
    
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        {!collapsed && <h2>BinusFlow</h2>}
      </div>

     
      <button
        className="menu-item"
        onClick={() => onMenuChange("dashboard")}
      >
        <img src={homeIcon} alt="home" />
        {!collapsed && <span>Dashboard</span>}
      </button>

    
      <button
        className="menu-item"
        onClick={() => onMenuChange("configuration")}
      >
        <img src={gearIcon} alt="config" />
        {!collapsed && <span>Configuration</span>}
      </button>
    </aside>
  )
}
