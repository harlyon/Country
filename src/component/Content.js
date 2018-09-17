import React, { Component } from 'react';
import './Main.css';

class Content extends Component {
    render() {
        return (
            <div>
              {
                this.props.countries.map((country,i)=> {
                  return (
                    <div className="page-template-page-fullsingle-split" key={i}>
                    <div className="split-content-vertically-center">
                      <div className="split-intro">
                        <h1>{country.capital}</h1>
                        <span className="tagline">{country.name}.</span>
                      </div>
                      <div className="split-bio">
                        <p><img src={country.flag} alt="flag" />
                        <ul>
                            <li>Region:- <a href="">{country.region}</a></li>
                            <li>SubRegion:- <a href="">{country.subregion}</a></li>
                            <li>Official Language:- <a href="">{country.languages[0].name}</a></li>
                            <li>Population:- <a href="">{country.population}</a></li>
                            <li>Demonym:- <a href="">{country.demonym}</a></li>
                            <li>Currency:- <a href="">{country.currencies[0].name}</a></li>
                            {/* <li>Call Code:- <a href="">{country.callingcodes[1]}</a></li> */}
                          </ul>
                         </p>
                      </div>
                    </div>
                  </div>    
                  )
                })
              }
            
            </div>
        );
    }
}

export default Content;