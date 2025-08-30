import React, { useEffect, useRef } from 'react';
import webglFluid from 'webgl-fluid';
import * as styles from './FluidBackground.module.css';

const FluidBackground = () => {
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && canvasRef.current && overlayRef.current) {
      const canvas = canvasRef.current;
      const overlay = overlayRef.current;
      
      // Initialize fluid
      webglFluid(canvas, {
        IMMEDIATE: false,
        TRIGGER: 'hover',
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 1024,
        DENSITY_DISSIPATION: 3,
        VELOCITY_DISSIPATION: 1.95,
        VORTICITY: 4,
        PRESSURE: 0.8,
        SPLAT_RADIUS: 0.2,
        SPLAT_FORCE: 6000,
        BLOOM: true,
        BLOOM_INTENSITY: 0.05,
        BLOOM_THRESHOLD: 0.6,
        SUNRAYS: false,
      });

      const handleEvent = (originalEvent) => {
        const newEvent = new MouseEvent(originalEvent.type, {
          clientX: originalEvent.clientX,
          clientY: originalEvent.clientY,
          bubbles: true,
          cancelable: true,
          buttons: originalEvent.buttons,
          button: originalEvent.button,
        });
        canvas.dispatchEvent(newEvent);

        if (originalEvent.type === 'mousedown') {
          overlay.style.pointerEvents = 'none';
          const elementBelow = document.elementFromPoint(originalEvent.clientX, originalEvent.clientY);
          overlay.style.pointerEvents = 'auto';
          if (elementBelow) {
            elementBelow.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
          }
        }
      };

      const events = ['mousemove', 'mousedown', 'mouseup'];      
      events.forEach(eventType => {
        overlay.addEventListener(eventType, handleEvent);
      });

      return () => {
        events.forEach(eventType => {
          overlay.removeEventListener(eventType, handleEvent);
        });
      };
    }
  }, []);

  return (
    <>
      {/* Actual fluid canvas - behind everything */}
      <canvas 
        ref={canvasRef} 
        className={styles.fluidCanvas} 
        style={{ zIndex: -1, position: 'fixed', top: 0, left: 0 }}
      />
      
      {/* Invisible overlay to capture mouse events */}
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 1000,
          pointerEvents: 'auto',
          backgroundColor: 'transparent',
        }}
      />
    </>
  );
};

export default FluidBackground;
