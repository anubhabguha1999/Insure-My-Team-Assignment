import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import AppBar from "./component/AppBar";
import Posts from "./component/Posts";

const App = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <AppBar fillSearch={setSearch} />
      <Posts searchKey={search} />
    </>
  );
};

export default App;
