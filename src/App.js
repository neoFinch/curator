import React, { createElement, useEffect, useRef, useState } from "react";
// import Sections from './components/Sections';
import { InsertSectionButton } from "./pure-components/buttons";
import "./app.css";
import interact from "interactjs";
import ActionBar from "./components/ActionBar";
import Grid from "./components/Grid";
import RightSidebar from "./components/RightSidebar";

function FloatableSection({ children, style }) {
  return (
    <div
      className="absolute w-48 bg-gray-200 px-4 py-2 shadow-lg"
      style={style}
    >
      {children}
    </div>
  );
}

function App() {
  let cotainerRef = useRef(null);
  const [showFlotableSection, setShowFlotableSection] = useState(false);
  const [floatablePanelStyle, setFloatablePanelStyle] = useState({});
  const [currentId, setCurrentId] = useState(0);
  const [target, setTarget] = useState(null);
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [showGrid, setShowGrid] = useState(true);

  useEffect(() => {
    cotainerRef.current.addEventListener(
      "contextmenu",
      function (ev) {
        ev.preventDefault();
        console.log("show something cool");
        console.log(ev.target.id);
        // ev.target.style.outline = "2px dashed red";
        setFloatablePanelStyle({
          left: ev.clientX - 80 + "px",
          top: ev.clientY + "px",
        });
        setShowFlotableSection(true);
        if (ev.target.id != undefined) {
          setCurrentId(ev.target.id);
          let tempSelectedElem = document.getElementById(currentId);
        } else {
          alert("choose an element");
        }
      },
      false
    );
  }, []);

  useEffect(() => {
    interact(".selected-elem").resizable({
      edges: { top: true, left: true, bottom: true, right: true },
      listeners: {
        move: function (event) {
          let { x, y } = event.target.dataset;

          x = (parseFloat(x) || 0) + event.deltaRect.left;
          y = (parseFloat(y) || 0) + event.deltaRect.top;

          Object.assign(event.target.style, {
            width: `${event.rect.width}px`,
            height: `${event.rect.height}px`,
            transform: `translate(${x}px, ${y}px)`,
          });

          Object.assign(event.target.dataset, { x, y });
        },
      },
      modifiers: [
        // keep the edges inside the parent
        interact.modifiers.restrictEdges({
          outer: "parent",
        }),

        // minimum size
        // interact.modifiers.restrictSize({
        //   min: { width: 100, height: 5 },
        // }),
      ],
    });
  }, []);

  const handleWorkAreaClick = (ev) => {
    console.log("target :", ev.target);
    // remove border from old target
    if (target !== null) {
      target.classList.remove("selected-elem");
    }
    // apply border to new target
    ev.target.classList += " selected-elem";
    setTarget(ev.target);
    setShowFlotableSection(false);
  };

  const createElement = (id, elemType) => {
    let elem;
    switch (elemType) {
      case "div":
        elem = document.createElement("div");
        elem.id = id;
        elem.className += "p-2 h-10 w-full border border-gray-500";
        console.log("elem ", elem);
        console.log("tar : ", target);
        target.appendChild(elem);
        // document.getElementById(currentId).appendChild(elem);
        break;
      case "section":
        elem = document.createElement("section");
        elem.id = id;
        elem.className += "p-2 h-10 w-full border border-gray-500";
        // document.getElementById(currentId).appendChild(elem);
        break;
    }
  };

  const handleOnMouseLeave = (e) => {
    // e.target.removeClass("adjuster");
  };

  return (
    <div className="flex p-4 relative justify-center h-screen">
      <div
        id="0"
        ref={cotainerRef}
        onClick={handleWorkAreaClick}
        className="w-5/6 min-h-screen border-2 border-green-500 cursor-pointer relative"
      >
        {showGrid && <Grid />}
        <div id="xyz" className="w-1/3 p-10 bg-gray-200  opacity-75">
          XYZ
        </div>
        <div id="abc" className="w-1/3 p-10 bg-gray-300 opacity-75">
          ABC
        </div>
      </div>
      {
        // END OF MAIN CANVAS
      }
      {showRightSidebar && (
        <RightSidebar setShowGrid={setShowGrid} showGrid={showGrid} />
      )}
      {showFlotableSection && (
        <FloatableSection style={floatablePanelStyle}>
          <h1>+ Insert Section</h1>
          <InsertSectionButton createElement={createElement}>
            div
          </InsertSectionButton>
          <InsertSectionButton>section</InsertSectionButton>
          <div className="w-full my-2"></div>
          <h1>+ Insert Text</h1>
          <InsertSectionButton>paragraph</InsertSectionButton>
          <InsertSectionButton>Heading</InsertSectionButton>
        </FloatableSection>
      )}
    </div>
  );
}

export default App;
