import CarsService from "../services/Cars";
import CarsComponents from "../components/CarsComponent";
import { useState, useEffect } from "react";

const AppCars = () => {
  const [cars, setCars] = useState([]);

  const handleGetCars = async () => {
    const response = await CarsService.getAll("/cars");
    console.log(response.data);
    setCars(response.data);
  };

  useEffect(() => {
    handleGetCars();
  }, []);

  return <CarsComponents key={cars.id} cars={cars} />;
};

export default AppCars;
