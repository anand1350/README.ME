import React from "react";
export default function MenuOptions() {
  const menu = [
    "Resolutuibs",
    "Decision Making",
    "Psychology",
    "Self Improvement",
    "Science",
  ];

  return (
    <>
      <div className="d-flex borderdiv">
        {menu.map((menus) => (
          <div className="border">
            {menus}
          </div>
        ))}
      </div>
    </>
  );
}
