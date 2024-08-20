import React from "react";
import "./App.css";
import Hompage from "./components/Hompage";
import Table from "./components/Table";
function App() {
  return (
    <div className="main-container">
      <div className="center_div">
        <Hompage></Hompage>
      </div>
      {/* <Table></Table> */}
    </div>
  );
}

export default App;
