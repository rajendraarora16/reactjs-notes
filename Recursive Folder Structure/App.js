// App.js

import React, { useEffect, useState } from "react";
import Folder from "./Folder";

const App = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const fetcher = await fetch("https://api.npoint.io/62d53ad0987235c1189e");
    
    if (!fetcher.ok) {
      console.log("Something went wrong")
    }
    
    const response = await fetcher.json();
    setData(response);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return "Loading...";
  }

  return <>
    <ul>
      {data && data?.map(item => {
        return <Folder key={item?.id} data={item} />
      })}
    </ul>
  </>
}

export default App;
