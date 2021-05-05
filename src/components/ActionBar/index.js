import React from "react";

export default function ActionBar() {
  const handleFlexOnOff = () => {};

  const handleFlexWrapOnOff = () => {};

  return (
    <div className="absolute top-0 right-0 w-1/3">
      <div>Edit</div>
      <div>
        <input onChange={handleFlexOnOff} name="flex-on-off" type="checkbox" />
        <label>Flex</label>
      </div>
      <div>
        <input
          onChange={handleFlexWrapOnOff}
          name="flex-wrap-on-off"
          type="checkbox"
        />
        <label>Flex Wrap</label>
      </div>
    </div>
  );
}
