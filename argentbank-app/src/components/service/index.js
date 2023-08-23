import React  from 'react';
import './style.css';


export default function Service({title, content, src}) {
    return (
        
            
            <div className="feature-item">
                <img src={src} alt="Icon" className="feature-icon" />
                <h3 className="feature-item-title">{title}</h3>
                <p>
                    {content}
                </p>
            </div>
        
    );
  }