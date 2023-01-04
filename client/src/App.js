import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Checkout from './Checkout';
import Success from './Success';
import Cancel from './Cancel';
import Order from './Order';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Order/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
          <Route exact path="/success" element={<Success/>}/>
          <Route exact path="/cancel" element={<Cancel/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
