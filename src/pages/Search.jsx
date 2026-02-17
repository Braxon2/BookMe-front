const Search = () => {
  return (
    <div className="container">
      <form action="">
        <div className="input-container">
          <p>City</p>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Search for city"
          />
        </div>
        <div className="input-container">
          <p>Country</p>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Search for city"
          />
        </div>
        <div className="input-container">
          <p>Choose A Date For Check In</p>
        </div>
        <div className="input-container">
          <input type="date" name="checkin" id="checkin" />
        </div>
        <div className="input-container">
          <p>Choose A Date For Check Out</p>
        </div>
        <div className="input-container">
          <input type="date" name="checkout" id="checkout" />
        </div>
        <div className="input-container">
          <p>Number of Guests</p>
        </div>
        <div className="input-container">
          <label for="adults">Adults: </label>
          <input type="number" name="adults" id="adults" min="1" max="10" />
        </div>
        <div className="input-container">
          <p>Number of Kids</p>
        </div>
        <div className="input-container">
          <label for="adults">Kids: </label>
          <input type="number" name="kids" id="kids" min="0" max="10" />
        </div>
        <div className="input-container">
          <button>Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;
