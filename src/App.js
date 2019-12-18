import React from "react";

//Components
// import Navbar from "./components/layout/Navbar";
import MainPaneRV from "./components/layout/MainPaneRV";

//Context
import LivroState from "./context/livros/livroState";

const App = () => {
  return (
    <LivroState>
      <div className="App">
        <MainPaneRV />
      </div>
    </LivroState>
  );
};

export default App;
