import { useNavigate } from "react-router-dom";
import "./styles/PropertyCard.css";
const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const navigateToUnits = () => {
    navigate(`/properties/${property.id}/units`);
  };
  return (
    <div className="property-card">
      <div className="property-image">
        <img src="src/assets/images/prop1.jpeg" alt="not found" />
      </div>
      <div className="property-info">
        <div className="info-field">
          <h2>{property.name}</h2>
        </div>
        <div className="info-field">
          <p>{property.propertyTypeDTO.id}</p>
        </div>
        <div className="info-field">
          <p>
            {property.city}, {property.country}
          </p>
        </div>
        <div className="info-field">
          <p>{property.address}</p>
        </div>
        <div className="info-field">
          <button onClick={navigateToUnits}>Check Units</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
