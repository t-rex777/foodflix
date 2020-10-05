import React, { useEffect, useState } from "react";
import logo from "../foodflix-logo.png"

function Nav() {
  const [scroll, setScroll] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
      return()=>{
          window.removeEventListener("scroll");
      }
    });
  }, []);

  return (
    <div className={`nav ${scroll && "nav_black"}`}>
      <img
        className="nav_logo"
        src={logo}
        alt="Foodflix logo"
      />
      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
