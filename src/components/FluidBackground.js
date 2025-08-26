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
        BLOOM_INTENSITY: 0.15,
        BLOOM_THRESHOLD: 0.6,
        SUNRAYS: false,
      });

      // Forward all mouse events from overlay to canvas
      const forwardMouseEvent = (originalEvent) => {
        console.log('Forwarding mouse event:', originalEvent.type, originalEvent.clientX, originalEvent.clientY);
        
        const newEvent = new MouseEvent(originalEvent.type, {
          clientX: originalEvent.clientX,
          clientY: originalEvent.clientY,
          bubbles: true,
          cancelable: true,
          buttons: originalEvent.buttons,
          button: originalEvent.button,
        });
        
        canvas.dispatchEvent(newEvent);
      };

      const events = ['mousemove', 'mousedown', 'mouseup', 'mouseenter', 'mouseleave'];
      const touchEvents = ['touchstart', 'touchmove', 'touchend'];

      const forwardTouchEvent = (originalEvent) => {
        const touch = originalEvent.touches[0] || originalEvent.changedTouches[0];
        if (!touch) return;
        const newEvent = new MouseEvent(
            originalEvent.type === 'touchstart'
                ? 'mousedown'
                : originalEvent.type === 'touchend'
                ? 'mouseup'
                : 'mousemove',
            {
                clientX: touch.clientX,
                clientY: touch.clientY,
                bubbles: true,
                cancelable: true,
                buttons: 1,
            }
            );
            canvas.dispatchEvent(newEvent);
        };
      
      events.forEach(eventType => {
        overlay.addEventListener(eventType, forwardMouseEvent);
      });
      touchEvents.forEach(eventType => {
        overlay.addEventListener(eventType, forwardTouchEvent, { passive: false });
      });

      return () => {
        events.forEach(eventType => {
          overlay.removeEventListener(eventType, forwardMouseEvent);
        });
        touchEvents.forEach(eventType => {
          overlay.removeEventListener(eventType, forwardTouchEvent);
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
