import "./styles/BookableUnit.css";
import image1 from "../assets/images/image1.jpg";
import { useNavigate } from "react-router-dom";
const BookableUnit = ({ bookableUnit }) => {
  const navigate = useNavigate();

  const doubleBeds = bookableUnit.doubleBeds;
  const singleBeds = bookableUnit.singleBeds;

  const unitId = bookableUnit.id;

  const navigateToUnitFacilities = (e) => {
    e.preventDefault();
    navigate(`/units/${unitId}/unit-fascilities`);
  };

  const navigateToPeriodPrice = (e) => {
    e.preventDefault();
    navigate(`/units/${unitId}/add-price`);
  };
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
        <div className="flex-buttons">
          <button>Add Image</button>
          <button onClick={navigateToUnitFacilities}>Add Unit fasility</button>
          <button onClick={navigateToPeriodPrice}>Add period price</button>
        </div>
      </div>
    </div>
  );
};

export default BookableUnit;
