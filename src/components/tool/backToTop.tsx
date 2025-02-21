import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.pageYOffset > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);

  return (
    <button
    onClick={scrollToTop}
    style={{
      ...buttonStyle,
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.5s',
    }}
  >
    <div className="flex items-center gap-2">
      <ChevronUp className="w-4 h-4" />
      <span>Top</span>
    </div>
  </button>
  );
};

const buttonStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px 20px',
  backgroundColor: '#000',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  zIndex: 1000,
};

export default BackToTop;