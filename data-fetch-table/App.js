import "./styles.css";
import React, { useEffect, useState } from "react";
import ListDataTable from "./ListDataTable";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [empData, setEmpData] = useState([]);

  let fetchData = async () => {
    setLoading(true);
    const apiURL = "https://api.npoint.io/9243040e33433290b342";

    // Using axios
    axios.get(apiURL).then((res) => {
      setLoading(false);
      setEmpData(res?.data?.data);
    });

    // or
    // using fetch
    let getJsonData = await fetch(apiURL);
    let getData = await getJsonData.json();
    setEmpData(getData?.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return "Loading...";

  return (
    <div className="App">
      <ListDataTable data={empData} />
    </div>
  );
}
