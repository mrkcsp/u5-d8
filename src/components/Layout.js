import React from "react";
import MyFooter from "./MyFooter";
import Navigation from "./MyNav";

const Layout = ({ children }) => {
  /*  identifica all'interno di children, tutti i componenti che passiamo come figli di layout */
  return (
    <div>
      <>
        <Navigation />
        {children}{" "}
        {/*  tutto quello che passeremo nei tag layout comprenderà navbar e footer */}
        <MyFooter />
      </>
    </div>
  );
};

export default Layout;
