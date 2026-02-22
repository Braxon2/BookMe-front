const BookableUnitCard = ({ bookableUnit }) => {
  return (
    <div className="unit-card">
      <div className="unit-image">
        <img src={bookableUnit.imageUrl} alt="unit" />
      </div>
      <div className="unit-info">
        <div className="info-field">
          <p>Property name: {bookableUnit.propertyName}</p>
        </div>
        <div className="info-field">
          <h2>{bookableUnit.unitName}</h2>
        </div>
        <div className="info-field">
          <h2>{bookableUnit.totalPriceForStay}</h2>
        </div>

        <div className="info-field">
          <p>Max capacity: {bookableUnit.maxCapacity}</p>
        </div>
        {bookableUnit.doubleBeds > 0 ? (
          <div className="info-field">
            <p>Double beds: {bookableUnit.doubleBeds}</p>
          </div>
        ) : null}
        {bookableUnit.singleBeds > 0 ? (
          <div className="info-field">
            <p>Single beds: {bookableUnit.singleBeds}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BookableUnitCard;
