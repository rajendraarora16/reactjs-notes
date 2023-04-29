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
