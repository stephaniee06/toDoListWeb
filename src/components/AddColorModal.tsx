import React, { useState } from "react";
import "./Configuration.css";

type Props = {
  onClose: () => void;
  onSave: (color: string) => void;
};

export default function AddColorModal({ onClose, onSave }: Props) {
  const [hexCode, setHexCode] = useState("#562CF0");

  const isValidHex = (hex: string) => /^#([0-9A-F]{3}){1,2}$/i.test(hex);

  return (
    <div className="modal-overlay">
      <div className="add-color-modal">
        
        {/* up */}
        <div className="field-group-vertical">
          <label className="input-label">Color</label>
          <input
            type="text"
            className="hex-input-styled-full"
            value={hexCode}
            onChange={(e) => {
              const val = e.target.value;
              setHexCode(val.startsWith("#") ? val : `#${val}`);
            }}
          />
        </div>

        {/* down */}
        <div className="field-group-vertical">
          <label className="input-label">Preview</label>
          <div className="preview-container-stacked">
            <div 
              className="color-preview-box"
              style={{ backgroundColor: isValidHex(hexCode) ? hexCode : "#333" }}
            />
            {/* picker */}
            <input 
              type="color" 
              className="invisible-picker"
              value={isValidHex(hexCode) ? hexCode : "#562cf0"}
              onChange={(e) => setHexCode(e.target.value.toUpperCase())}
            />
          </div>
        </div>

        {/* footer */}
        <div className="modal-footer-spaced">
          <button className="btn-cancel-new" onClick={onClose}>
            Cancel
          </button>
          <button 
            className="btn-save-new" 
            onClick={() => isValidHex(hexCode) && onSave(hexCode)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}