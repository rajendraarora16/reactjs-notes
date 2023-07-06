import React, { useEffect } from "react";
import './App.css';

function App() {

  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/todos/";
    setLoading(true);
    const getJsonData = await fetch(apiUrl);
    setData(await getJsonData.json());
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


  // Pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);


  console.log("data: ", data);

  const prevFunc = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const nextFunc = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  const changeCPage = (id) => {
    setCurrentPage(id);
  }

  if(loading) return "Loading...";

  return (
    <div className="App">
      <table>
        <tr>
          <td>ID</td>
          <td>User ID</td>
          <td>Title</td>
          <td>Completed</td>
        </tr>
        {records?.map((d, index) => (
          <tr key={index}>
            <td>{d?.id}</td>
            <td>{d?.userId}</td>
            <td>{d?.title}</td>
            <td>{String(d?.completed)}</td>
          </tr>
        ))}        
      </table>

 {/* 
CSS styles
 
 ul > li {
  display: inline-block
 } */}
      <ul>
        <li><span onClick={prevFunc}>Prev</span></li>
        {
          numbers?.map(n => (
            <li className={currentPage === n ? "active" : ""}><span onClick={() => changeCPage(n)}>{n}</span></li>
          ))
        }
        <li><span onClick={nextFunc}>Next</span></li>
      </ul>
    </div>
  );
}

export default App;
