import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Header;
