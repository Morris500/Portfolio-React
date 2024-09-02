import React from "react";
import "./pricecard.css" ;
import { Link } from "react-router-dom";


const Pricecard = () => {
  return (
    <div>
        <div className="pricing">
          <div className="card-contianer" >

            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc"> $ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 pages -</p>
                <p>- Features -</p>
                <p>- Responsive Design -</p>
                {/* <>
                <Link to="/contact" className="btn" >PURCHASE NOW</Link>
                </> */}

            </div>

            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc"> $ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 pages -</p>
                <p>- Features -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn" >PURCHASE NOW</Link>

            </div>

            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc"> $ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 pages -</p>
                <p>- Features -</p>
                <p>- Responsive Design -</p>
                <link to="/contact" className="btn" >PURCHASE NOW</link>

            </div>





            </div> 
        </div>
    </div>
  )
}

export default Pricecard;