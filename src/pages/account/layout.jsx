import "./styles.scss";

import LogoIcon from "../../assets/images/1.svg";
import LogoText from "../../assets/images/2.svg";

const Layout = ({ classname = '',  children }) => {
  return (
    <main className={`login ${classname}`}>
      <div className="login__logo">
        <img src={LogoIcon} alt="icon" height={38} />
        <img src={LogoText} alt="mercurycash" height={19} />
      </div>

      { children }
    </main>
  )
}

export default Layout;
