import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <section>
      <div className="covid">
          <div className="topBar">
        <h1>COVID 19 Coronavirus Tracker</h1>

        <Link to='/statewise'>
        <button className="stateBtn"> Statewise</button>
        </Link>
        
        </div>
        <div >
          <ul className="card_Main">
            <li >
              <div className="card_inner">
                <p className="card_name">
                  <span>OUR</span> COUNTRY
                </p>
                <p className="card_Small">INDIA</p>
              </div>
            </li>
            <li >
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span> RECOVERED
                </p>
                <p className="card_Small">{data.recovered}</p>
              </div>
            </li>
            <li >
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span> CONFIRMED
                </p>
                <p className="card_Small">{data.confirmed}</p>
              </div>
            </li>
            <li >
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span> DEATHS
                </p>
                <p className="card_Small">{data.deaths}</p>
              </div>
            </li>
            <li >
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span> ACTIVE
                </p>
                <p className="card_Small">{data.active}</p>
              </div>
            </li>

            <li >
              <div className="card_inner">
                <p className="card_name">
                  <span>TOTAL</span> UPDATED
                </p>
                <p className="card_Small">{data.lastupdatedtime}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Covid;
