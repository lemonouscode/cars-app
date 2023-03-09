const CarsComponents = ({ cars }) => {
  return (
    <div>
      {cars.map((e) => (
        <div>{e.id}</div>
      ))}
    </div>
  );
};

export default CarsComponents;
