import { useEffect, useState } from "react";
import "./styles/Login.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, login, isLoading, error } = useAuth();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <h2>LOG IN</h2>
        </div>
        <div className="input-container">
          <p>Email:</p>
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="ex. email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container">
          <p>Password</p>
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Log in</button>
        {error && <div className="error">{error}</div>}
        {user && <div>{user.id}</div>}
      </form>
    </div>
  );
};

export default Login;
