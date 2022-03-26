import TipCalculator from "./components/TipCalculator";
import logo from './img/logo.svg'
import './index.css'

function App() {
  return (
    <div className="main">
      <img src={logo} className="main__logo" title="Main logo" alt="Mail Tip Calculator App Logo" />
      <TipCalculator />
    </div>
  );
}

export default App;