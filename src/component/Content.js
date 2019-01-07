import React from 'react';
import './Main.css';
var NumberFormat = require('react-number-format');

const Content = ({item}) => {
        return (
            <div>
                  <div className="page-template-page-fullsingle-split">
                    <div className="split-content-vertically-center">
                      <div className="split-intro">
                        <h1>{item.capital}</h1>
                        <span className="tagline">{item.name}.</span>
                      </div>
                      <div className="split-bio">
                        <ul>
                          <p><img src={item.flag} alt="flag" />
                              <li>Region:- <a href="">{item.region}</a></li>
                              <li>SubRegion:- <a href="">{item.subregion}</a></li>
                              <li>Official Language:- <a href="">{item.languages[0].name}</a></li>
                              <li>Population:- <a href=""><NumberFormat value={item.population} displayType={'text'} thousandSeparator={true}/></a></li>
                              <li>Demonym:- <a href="">{item.demonym}</a></li>
                              <li>Currency:- <a href="">{item.currencies[0].name}</a></li>
                              {/* <li>Call Code:- <a href="">{item.callingcodes[1]}</a></li> */}
                          </p>
                        </ul>
                      </div>
                    </div>
                  </div>
            </div>
        );
    // }
}

export default Content;