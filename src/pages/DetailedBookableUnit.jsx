import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./styles/DetailedBookableUnit.css";
import { useState } from "react";

const DetailedBookableUnit = () => {
  const { unitId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const { data: unit, loading } = useFetch(
    unitId ? `http://localhost:8080/api/units/${unitId}` : null,
  );

  const handleBooking = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const bookingRequestDTO = {
      start_date: startDate,
      end_date: endDate,
    };

    try {
      const res = await fetch(
        `http://localhost:8080/api/units/${unitId}/book`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingRequestDTO),
        },
      );

      const json = await res.json();

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({
          message: "An unexpected error occurred",
        }));
        throw new Error(
          errorData.message || `Error ${res.status}: ${res.statusText}`,
        );
      }

      if (res.ok) {
        navigate("/profile");
      }
    } catch (er) {
      setError(er.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading || !unit) return <p>Loading...</p>;

  const {
    propertyDTO: property,
    name: unitName,
    maxCapacity,
    squareMeters,
    singleBeds,
    doubleBeds,
  } = unit;
  const { city, country, address, description, name: propertyName } = property;

  return (
    <div className="page-unit-wrapper">
      <div className="unit-container">
        <div className="unit-layout-container">
          <div className="unit-info-detail">{propertyName}</div>

          <div className="unit-info-detail">
            {city},{country} - {address}
          </div>

          <div className="unit-info-detail">
            <h2>About the property</h2>
            <p>{description}</p>
          </div>
          <div className="unit-info-detail">
            <button className="booking-btn" onClick={handleBooking}>
              Book Now
            </button>
          </div>
          {isLoading && (
            <div className="unit-info-detail">
              <p>Loading...</p>
            </div>
          )}
          {error && (
            <div className="unit-info-detail">
              <p>{error}</p>
            </div>
          )}

          <div className="grid-facillities"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailedBookableUnit;
