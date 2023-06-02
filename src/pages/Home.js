import React, { useContext } from "react";
import { ThemeContext } from "../Contexts";
import Main from "../components/Main";

function Home() {
  const { book } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: "#F0F8FF" }}>
      <Main searchedBook={book} />
    </div>
  );
}

export default Home;
