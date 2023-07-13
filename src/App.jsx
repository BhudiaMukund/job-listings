import { useEffect, useState } from "react";
import "./App.css";
import json from "./data.json";
// Components
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Listings from "./components/Listings/Listings";
import Footer from "./components/Footer/Footer";

function App() {
  const [data, setData] = useState(json);
  const [listingData, setListingData] = useState(data);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const updatedData = json.map((item) => {
      return {
        ...item,
        filters: [item.role, item.level, ...item.languages, ...item.tools],
      };
    });
    setData(updatedData);
  }, []);

  useEffect(() => {
    if (filter.length > 0) {
      const filteredArray = data.filter((job) => {
        return filter.every((filterItem) => job.filters.includes(filterItem));
      });
      setListingData(filteredArray);
    } else {
      setListingData(data);
    }
  }, [filter]);

  return (
    <div className="App">
      <Header />
      {filter.length > 0 && (
        <Nav
          filter={filter}
          setFilter={setFilter}
          data={data}
          setListingData={setListingData}
        />
      )}
      <Listings
        listingData={listingData}
        setFilter={setFilter}
        filter={filter}
      />
{/*       <Footer autoClose={8000} /> */}
    </div>
  );
}

export default App;
