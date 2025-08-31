import React from 'react';

const fallbackStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#001027ff',
  color: 'white',
  fontSize: '1.2rem',
  flexDirection: 'column',
};

const spinnerStyle = {
  border: '4px solid rgba(255, 255, 255, 0.3)',
  borderTop: '4px solid white',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  animation: 'spin 1s linear infinite',
  marginBottom: '10px',
};

const spinnerKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
  }
`;

if (typeof document !== 'undefined' && !document.getElementById('spinner-keyframes')) {
  const style = document.createElement('style');
  style.id = 'spinner-keyframes';
  style.innerHTML = spinnerKeyframes;
  document.head.appendChild(style);
}

const LoadingFallback = () => (
  <div style={fallbackStyle}>
    <div style={spinnerStyle}></div>
    Loading ...
  </div>
);

export default LoadingFallback