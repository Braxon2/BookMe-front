import "./styles/Register.css";

const Register = () => {
  return (
    <div className="container">
      <form action="">
        <div className="input-container">
          <h2>REGISTER</h2>
        </div>
        <div className="input-container">
          <p>First Name:</p>
        </div>
        <div className="input-container">
          <input type="text" name="firstname" id="firstname" />
        </div>
        <div className="input-container">
          <p>Last Name:</p>
        </div>
        <div className="input-container">
          <input type="text" name="lastname" id="lastname" />
        </div>
        <div className="input-container">
          <p>Phone Number:</p>
        </div>
        <div className="input-container">
          <input type="tel" name="phonenumber" id="phonenumber" />
        </div>
        <div className="input-container">
          <p>Register as:</p>
        </div>
        <div className="input-container">
          <select name="type" id="type">
            <option value="Guest">Guest</option>
            <option value="Owner">Owner</option>
          </select>
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
          />
        </div>
        <div className="input-container">
          <p>Password</p>
        </div>
        <div className="input-container">
          <input type="password" name="password" id="password" />
        </div>
      </form>
    </div>
  );
};

export default Register;
