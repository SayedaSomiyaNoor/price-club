import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Pricing from './Components/Pricing/Pricing';
import Rechart from './Components/Rechart/Rechart';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricing></Pricing>
      <Rechart></Rechart>
    </div>
  );
}

export default App;
