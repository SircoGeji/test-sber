import React from 'react';
import './App.sass';
import Info from "./components/EmployeeInformation/Info";

function App() {
  return (
    <div className="app-wrapper">
      {/*<div>Form</div>*/}
      <div className="app-wrapper-content">
          <Info />
      </div>

    </div>
  );
}

export default App;
