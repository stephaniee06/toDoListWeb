import { useState } from "react";
import "./Configuration.css";
import AddColorModal from "./AddColorModal";

export default function Configuration() {
 
  const [colors, setColors] = useState(["#ff0000", "#1e1e1e", "#e91ee3"]);
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  const handleSaveColor = (newHex: string) => {
 
    const formattedColor = newHex.startsWith("#") ? newHex : `#${newHex}`;
    setColors([...colors, formattedColor]);
    setIsModalOpen(false);
  };

 
  const handleDeleteColor = (indexToDelete: number) => {
    setColors(colors.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="config-wrapper">
      <div className="config-container">
        <div className="config-title-box">
          This is configuration page
        </div>

        <div className="config-content">
          <p className="config-label">Color list</p>

          <div className="color-box">
            <div className="color-list-grid">
              
              {colors.map((color, index) => (
                <div key={index} className="color-item">
                  
                  <span 
                    className="color-dot" 
                    onClick={() => handleDeleteColor(index)}
                    style={{ cursor: 'pointer' }}
                  />
                  <div
                    className="color-square"
                    style={{ background: color }}
                  />
                </div>
              ))}

           
              <button 
                className="add-color-btn" 
                onClick={() => setIsModalOpen(true)}
              >
                <div className="plus">+</div>
                <small>ADD COLOR</small>
              </button>
            </div>
          </div>
        </div>
      </div>

 
      {isModalOpen && (
        <AddColorModal 
          onClose={() => setIsModalOpen(false)} 
          onSave={handleSaveColor}
        />
      )}
    </div>
  );
}