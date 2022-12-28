import React from "react";
import Sidebar from "./Layouts/Sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const MainPage = React.lazy(() => import("./Pages/Main/MainPage"));

function App() {
  return (
    <Router>
      {<Sidebar />}
      <div className="app">
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
