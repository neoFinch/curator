import React from "react";

const RightSidebar = ({ showGrid, setShowGrid }) => {
  const handleGrid = () => {
    setShowGrid(!showGrid);
  };

  return (
    <div className="w-1/6 p-4">
      <div className="h-10 w-full">
        <input onChange={handleGrid} id="grid-on-off" type="checkbox" />
        <label for="grid-on-off" className="cursor-pointer">
          {" "}
          Grid On/Off{" "}
        </label>
      </div>
      <div className="measument-box w-full border-t border-gray-800">
        <h1 className="text-center text-lg py-4">Measurements</h1>
        <div className="text-center text-sm pt-2">Classes</div>
      </div>
    </div>
  );
};

export default RightSidebar;
