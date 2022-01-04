import React, { Fragment } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Fragment>
      <Router>

<Header />
      
</Router>
    </Fragment>
  
  );
}

export default App;
