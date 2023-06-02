import React from "react";

function WhereAreWe() {
  const address = "vicolo stretto, 11";

  const handleAddressClick = () => {
    window.open(
      `https://www.google.com/maps/place/${encodeURIComponent(address)}`,
      "_blank"
    );
  };

  return (
    <p>
      <i onClick={handleAddressClick}>{address}</i>
    </p>
  );
}

export default WhereAreWe;
