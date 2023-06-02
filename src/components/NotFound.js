import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Azz, questa pagina non è presente</h1>
      <p>
        <Link to="/">Torna alla homepage del sito</Link>
      </p>
    </div>
  );
};

export default NotFound;
