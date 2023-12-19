import { Link } from "react-router-dom";
interface NavProps {
  key: string;
  linkValue: string;
  navValue: string;
}
const NavComponents = (props: NavProps): JSX.Element => {
  return (
    <li>
      <Link className="nav-components" to={props.linkValue}>
        {props.navValue}{" "}
      </Link>
    </li>
  );
};

export default NavComponents;
