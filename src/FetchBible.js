import { useEffect, useState } from "react";
import './FetchBible.css';
export default function Bible() {
  const [verse, Setverses] = useState([]);
  const [users, setUsers] = useState([]);

  async function fetchBibleverses() {
    const response = await fetch("https://bible-api.com/john%203:16");
    console.log(response);
    const bibleverses = await response.json();
    console.log(bibleverses);
    Setverses(bibleverses);
  }
  const fetchData = (e) => {
    const query = e.target.value;
    console.log(query);
    fetch(`https://bible-api.com/${query}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        Setverses(data);
      });
  };

  return (
    <div className="main">
            <h1>Bible verse</h1>
      <div className="biblesearch">
      <button onClick={() => fetchBibleverses()}>Today's verse</button>
      <input onChange={fetchData} type="text" label="Search User" placeholder="Psalms 91:1"/>
      <button>Go</button>
      <button onClick={() => Setverses([])}>Refresh</button>
      </div>
      <div className="verses">
      <h4>{verse.text}</h4>
      <p>{verse.reference}</p>
      </div>
    </div>
  );
}
