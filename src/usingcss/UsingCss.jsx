import React from 'react';
import './example.css';

const UsingCss = () => {
    
    // This css is for like object.
    const developerStyle = {
        border: '3px solid green',
        borderRadius: '8px',
    }

    return (
        <div>
            <h2 style= {{
            border: '1px solid purple',
            borderRadius: '8px',
            }}>This is inline css</h2>

            <h2 className='myCss'>This is external css</h2>
            <h2 style={developerStyle}>This css is like object</h2>
        </div>
    );
};

export default UsingCss;