import React from "react";

const RenderLabelInput = ({ groupData }) => {
  let objK = Object.keys(groupData);
  let objV = Object.values(groupData);

  return objV.map((val) => {
    return (
      <div>
        <ul style={{ listStyleType: "none" }}>
          {val.map((v) => {
            return (
              <li style={{ display: "inline-block" }}>
                <input type="radio" value={v} />
                <label for={v}>{v}</label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });
};

export default function RenderRadioButton({ groupData, workingGroup }) {
  return (
    <>
      <h1>Test app</h1>
      <RenderLabelInput groupData={groupData} />
    </>
  );
}

/*
  const data = {
    Group1: ["A1", "A2", "A3", "A4"],
    Group2: ["B1", "B2", "B3", "B4"],
    Group3: ["C1", "C2", "C3", "C4"],
    Group4: ["D1", "D2", "D3", "D4"]
  };
*/
