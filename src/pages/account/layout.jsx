import {useEffect, useState} from "react";

import "./styles.scss";

import LogoIcon from "../../assets/images/1.svg";
import LogoText from "../../assets/images/2.svg";

const Layout = ({ classname = '',  children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 5000);
    });

    return loading ? (
      <div className="loading">
        <div className="loading__container">
            <div className="lds-ripple"><div></div><div></div></div>
            <p>Loading...</p>
        </div>
      </div>
    ) : (
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
