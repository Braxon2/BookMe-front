import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const usePostProperty = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useAuth();

  const postProperty = async (propertyForCreation) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:8080/api/properties", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyForCreation),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Property creation failed.");
      }

      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, postProperty };
};

export default usePostProperty;
