import "./App.css";

import ShelteredContext, { sheltered } from "./context/sheltered-context";
import ShelteredListPage from "./components/shelteredList/ShelteredListPage";

function App() {
  return (
    <div className="app">
      <ShelteredContext.Provider value={sheltered}>
        <ShelteredListPage></ShelteredListPage>;
      </ShelteredContext.Provider>
    </div>
  );
}

export default App;
