import { ReactElement } from "react";
import { LOGO_URL } from "../utils/constant";
const LogoImage = (): ReactElement => {
  return <img className="logo" src={LOGO_URL} alt="" />;
};

export default LogoImage;
