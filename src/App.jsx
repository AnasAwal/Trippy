import './App.css';
import Home from './view/Home';
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <HashRouter base="/">
        <Home />
      </HashRouter>
    </div>
  );
}

export default App;
