import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Search from "./pages/Search";
import AddProperty from "./pages/AddProperty";
import ListingProperties from "./pages/ListingProperties";
import ListingUnits from "./pages/ListingUnits";
import ListingFascilities from "./pages/ListingFascilities";
import PropertyImages from "./pages/PropertyImages";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/add-property" element={<AddProperty />} />
        <Route path="/list-properties" element={<ListingProperties />} />
        <Route
          path="/properties/:propertyId/units"
          element={<ListingUnits />}
        />
        <Route path="/fascilities" element={<ListingFascilities />} />
        <Route
          path="/properties/:propertyId/images"
          element={<PropertyImages />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
