import React, { useState } from "react";

const Folder = ({ data }) => {
  
  const [expand, setExpand] = useState(false);

  if (data && data?.fileName) {
    return <li>{data?.fileName}</li>
  }

  return <>
    <li onClick={() => setExpand(!expand)}>{data?.name}</li>

    <ul style={{ paddingLeft: "20px" }}>
      {expand && data?.children?.map(item => {
        return <Folder key={item.id} data={item} />
      })}
    </ul>
  </>;
}

export default Folder;
