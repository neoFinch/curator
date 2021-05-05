import React from 'react';

export function InsertSectionButton({ children, className, createElement }) {

  console.log('createElement : ', createElement);
  const handleClick = () => {
    createElement(Date.now(), children)
  }

  return (
    <button
      onClick={handleClick}
      className={`w-full mb-1 hover:bg-teal-100 bg-gray-100 p-2 focus:outline-none ${className}`}>
      {children}
    </button>
  )
}