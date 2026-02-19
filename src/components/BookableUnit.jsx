import "./styles/BookableUnit.css";
import image1 from "../assets/images/image1.jpg";
const BookableUnit = ({ bookableUnit }) => {
  const doubleBeds = bookableUnit.doubleBeds;
  const singleBeds = bookableUnit.singleBeds;
  return (
    <div className="unit-card">
      <div className="unit-image">
        <img src={image1} alt="unit" />
      </div>
      <div className="unit-info">
        <div className="info-field">
          <h2>{bookableUnit.name}</h2>
        </div>
        <div className="info-field">
          <p>Square meters: {bookableUnit.squareMeters}m²</p>
        </div>
        <div className="info-field">
          <p>Max capacity: {bookableUnit.maxCapacity}</p>
        </div>
        {doubleBeds > 0 ? (
          <div className="info-field">
            <p>Double beds: {bookableUnit.doubleBeds}</p>
          </div>
        ) : null}
        {singleBeds > 0 ? (
          <div className="info-field">
            <p>Single beds: {bookableUnit.singleBeds}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
  /*
   "id": 2,
        "maxCapacity": 2,
        "squareMeters": 25.6,
        "totalUnits": 4,
        "singleBeds": 0,
        "doubleBeds": 1,
        "maxAdultCapacity": 2,
        "maxKidsCapacity": 1,
        "name": "Studio A
  */
};

export default BookableUnit;
