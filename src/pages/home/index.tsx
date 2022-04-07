import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 16 }}>
      <button onClick={() => navigate("memo-parent")}>React.memo あり</button>
      {/* <button onClick={() => navigate("memo-parent")}>React.memo なし</button> */}
    </div>
  );
};

export { Home };