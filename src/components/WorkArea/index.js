import React from 'react';

export default function WorkArea({ children }) {

  let cotainerRef = useRef(null);
  const handleMouseEnter = (e) => {
    e.target.style.outline = '2px dashed red';
  }

  const handleMouseLeave = (e) => {
    // e.target.style.outline = 'none';
  }

  return (
    // <div
    //   id='0'
    //   ref={cotainerRef}
    //   // onClick={handleWorkAreaClick}
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
    //   className="w-5/6 min-h-screen border-2 border-green-500 cursor-pointer">
    //   {children}
    // </div>
  )
}