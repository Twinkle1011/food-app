import LoginButton from "../components/LoginButton";
import { navObject } from "../utils/constant";
import NavComponents from "../components/NavComponents";
import LogoImage from "../components/LogoImage";
import { Link } from "react-router-dom";
import { useCartSelector } from "../utils/appStore";

const Header = (): JSX.Element => {
  const cartItems = useCartSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header">
      <div className="logo-container">
        <LogoImage />
      </div>
      <div className="nav-items">
        <ul>
          {Object.keys(navObject).map((key) => (
            <NavComponents
              key={key}
              navValue={key}
              linkValue={navObject[key]}
            />
          ))}
          <li>
            <Link className="nav-components" to="/cart">
              Cart ({cartItems.length})
            </Link>
          </li>
          <LoginButton />
        </ul>
      </div>
    </div>
  );
};

export default Header;
