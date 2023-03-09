import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/cars" component={AppCars} />
        <Route path="/add" component={AddCar} />
        <Redirect to="/cars" />
      </Switch>
    </div>
  );
}

export default App;
