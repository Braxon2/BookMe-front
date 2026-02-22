import { Calendar, DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import "./styles/AddPeriodPriceUnit.css";
import usePost from "../hooks/usePost";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import dayjs from "dayjs";
import { Text } from "@mantine/core";
const AddPeriodPriceUnit = () => {
  const { unitId } = useParams();
  const [value, setValue] = useState([null, null]);
  const [price, setPrice] = useState(0.0);
  const [season, setSeason] = useState("");

  const { data: priceDates } = useFetch(
    unitId ? `http://localhost:8080/api/units/${unitId}/period-prices` : null,
    {
      onError: (err) => {
        console.error("Fetch error:", err);
        console.error("Response status:", err.status);
        console.error("Response headers:", err.response?.headers);
      },
      onSuccess: (data) => {
        console.log("Fetch successful:", data);
      },
    },
  );

  const periodPriceToAdd = {
    pricePerNight: price,
    startDate: value[0],
    endDate: value[1],
    season,
  };

  const { data, post } = usePost();
  const handleDateChange = (dates) => {
    setValue(dates);
  };

  const handleSubmit = async () => {
    await post(
      `http://localhost:8080/api/units/${unitId}/add-price`,
      periodPriceToAdd,
    );
  };
  return (
    <div className="page-prices">
      <div className="price-layout">
        <DatePickerInput
          // minDate={"2026 02 22"}
          valueFormat="YYYY MMMM DD"
          type="range"
          placeholder="Choose a date range"
          value={value}
          onChange={handleDateChange}
        />
        <label htmlFor="price">
          Price:
          <input
            type="number"
            step={0.1}
            value={price}
            id="price"
            name="price"
            onChange={(e) => setPrice(parseFloat(e.target.value))}
          />
          Season:
          <input
            type="text"
            value={season}
            id="season"
            name="season"
            onChange={(e) => setSeason(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit}>Add price</button>
        <div className="available-prices">
          <h2>Available prices</h2>
          <Calendar
            static
            renderDay={(date) => {
              const currentDate = dayjs(date);

              const dateStr = dayjs(date).format("YYYY-MM-DD");

              const priceForDate = priceDates?.find((p) => {
                return (
                  currentDate.isAfter(p.startDate) &&
                  currentDate.isBefore(p.endDate)
                );
              });

              return (
                <div>
                  <div>{dayjs(date).date()}</div>
                  {priceForDate && (
                    <Text size="xs" c="blue" style={{ fontSize: "8px" }}>
                      ${priceForDate.pricePerNight}
                    </Text>
                  )}
                </div>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddPeriodPriceUnit;
