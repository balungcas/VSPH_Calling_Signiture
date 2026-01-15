
import React from 'react';

interface ToastProps {
  show: boolean;
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ show, message }) => {
  return (
    <div 
      className={`fixed bottom-8 right-8 bg-black text-white px-8 py-4 text-[11px] font-bold tracking-[4px] uppercase transition-all duration-500 transform z-50 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 bg-white animate-pulse"></div>
        {message}
      </div>
    </div>
  );
};
