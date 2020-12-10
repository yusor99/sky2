import { useMediaQuery } from "react-responsive";
import Labtop from "./labtop";
import Mobile from "./mobile";
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 900 });
  return isDesktop ? children : null;
};
const Mobile2 = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 900 });
  return isMobile ? children : null;
};

const NavBar = () => (
  <>
    <Desktop>
      <Labtop />
    </Desktop>

    <Mobile2>
      <Mobile />
    </Mobile2>
  </>
);

export default NavBar;
