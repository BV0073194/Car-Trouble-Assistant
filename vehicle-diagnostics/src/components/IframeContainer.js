import React, { useState } from 'react';

const IframeContainer = ({ autozoneUrl, oreillyUrl }) => {
  const [size, setSize] = useState(50);

  const handleResize = (e) => {
    const newSize = (e.clientX / window.innerWidth) * 100;
    setSize(newSize);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <iframe is="x-frame-bypass" src={autozoneUrl} style={{ width: `${size}%`, border: 'none' }} />
      <iframe src={oreillyUrl} style={{ width: `${100 - size}%`, border: 'none' }} />
      <div
        style={{
          width: '5px',
          cursor: 'col-resize',
          background: 'gray',
          height: '100%',
          position: 'absolute',
          left: `${size}%`,
        }}
        onMouseDown={() => window.addEventListener('mousemove', handleResize)}
        onMouseUp={() => window.removeEventListener('mousemove', handleResize)}
      />
    </div>
  );
};

export default IframeContainer;
