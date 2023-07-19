import React from "react";
import container from "./Style/Container.module.css";
import button from "./Style/Button.module.css";

import SubscriptionContent from "./Components/SubscriptionContent";
import SimpleInput from "./Components/SimpleInput";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className={`container ${container.blackbg} `}>
        <SubscriptionContent />
        <SimpleInput />
      </div>
    </div>
  );
}

export default App;
