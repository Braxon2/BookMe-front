import { DatePickerInput } from "@mantine/dates";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import BookableUnitCard from "../components/BookableUnitCard";
import "./styles/Search.css";

const Search = () => {
  const [value, setValue] = useState([null, null]);

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);

  const [searchUrl, setSearchUrl] = useState(null);

  const [units, setUnits] = useState(null);

  const handleDateChange = (dates) => {
    setValue(dates);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `http://localhost:8080/api/units/search?city=${city}&country=${country}&adults=${adults}&kids=${kids}&startDate=${value[0]}&endDate=${value[1]}`;

    try {
      const token = localStorage.getItem("jwtToken");

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      setUnits(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <p>City</p>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Search for city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="input-container">
          <p>Country</p>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Search for country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="input-container">
          <p>Choose A Date For Check In</p>
        </div>
        <div className="input-container">
          <DatePickerInput
            valueFormat="YYYY MMMM DD"
            type="range"
            placeholder="Choose a date range"
            value={value}
            onChange={handleDateChange}
          />
        </div>
        <div className="input-container">
          <p>Number of Guests</p>
        </div>
        <div className="input-container">
          <label htmlFor="adults">Adults: </label>
          <input
            type="number"
            name="adults"
            id="adults"
            min="1"
            max="10"
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
          />
        </div>
        <div className="input-container">
          <p>Number of Kids</p>
        </div>
        <div className="input-container">
          <label htmlFor="adults">Kids: </label>
          <input
            type="number"
            name="kids"
            id="kids"
            min="0"
            max="10"
            value={kids}
            onChange={(e) => setKids(parseInt(e.target.value) || 0)}
          />
        </div>
        <div className="input-container">
          <button>Search</button>
        </div>
      </form>

      <div className="property-list">
        <div className="input-container"></div>
        <h2>Found units:</h2>
      </div>
      <div className="units-list">
        {units?.map((unit) => (
          <BookableUnitCard key={unit.unitId} bookableUnit={unit} />
        ))}
      </div>
    </div>
  );
};

export default Search;
