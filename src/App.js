import Pricing from "./Pricing";
import { useState } from "react";
import "./styles/Style.css"
import {motion} from 'framer-motion'

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <h1>Our Pricing</h1>
      <div className="toggle-desc">
        <p>Annually</p>
        <Pricing  onChange={(e) => setToggle(e.target.checked)} />
        <p>Monthly</p>
      </div>
      <div className="cards">
        <div className="cards-left">
          <h3>Basic</h3>
          <p className="cards-price">$ {toggle ? "19.99" : "199.99"}</p>
            <div className="cards-features">
              <p>500 GB Stroge</p><hr />
              <p>2 User Allowed</p><hr />
              <p>Send up to 3 GB</p><hr />
            </div>
            <button className="cards-btn">Learn More</button>
        </div>
        <div className="cards-center">
          <h3>Professional</h3>
          <p className="cards-price">$ {toggle ? "24.99" : "249.99"}</p>
          <div className="cards-features">
              <p>1 TB Stroge</p><hr />
              <p>5 User Allowed</p><hr />
              <p>Send up to 10 GB</p><hr />
            </div>
            <button className="cards-btn-white">Learn More</button>
        </div>
        <div className="cards-right">
          <h3>Master</h3>
          <p className="cards-price">$ {toggle ? "39.99" : "399.99"}</p>
          <div className="cards-features">
              <p>2 TB Stroge</p><hr />
              <p>10 User Allowed</p><hr />
              <p>Send up to 20 GB</p><hr />
            </div>
            <button className="cards-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default App;
