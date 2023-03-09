import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Cars</Link>
      </div>
      <div>
        <Link to="/add">Add Car</Link>
      </div>
    </nav>
  );
};

export default Navbar;
