"use client";
import { useEffect } from 'react';

export default function CursorLogic() {
  useEffect(() => {
    const circle1 = document.querySelector('.circle-1');
    const circle2 = document.querySelector('.circle-2');

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      if (circle1) {
        circle1.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
      if (circle2) {
        circle2.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return null;
}
