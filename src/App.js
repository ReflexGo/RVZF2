import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// Check URL
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setloading(true);
    try {
      const response = await fetch(url);

      const tours = await response.json();
      console.log(tours);
      setloading(false);
      setTours(tours);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };
  const removeTour = (id) => {
    const restTour = tours.filter((el) => el.id !== id);
    setTours(restTour);
  };
  
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }


  return (
    <main>
      <Tours tours={tours} />
    </main>
  );

}

export default App;
