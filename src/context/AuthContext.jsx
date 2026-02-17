import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const jwtToken = localStorage.getItem("jwtToken");
    const userType = localStorage.getItem("userType");
    const userId = localStorage.getItem("userId");

    if (jwtToken && userType && userId) {
      setUser({ id: userId, role: userType });
      setIsAuthenticated(true);
      setIsAdmin(userType === "ADMIN");
    }
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Login failed");
      }

      localStorage.setItem("jwtToken", json.token);
      localStorage.setItem("userType", json.role);
      localStorage.setItem("userId", json.id);

      setUser({ id: json.id, role: json.role });
      setIsAuthenticated(true);
      setIsAdmin(json.role === "ADMIN");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAdmin,
        isLoading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
