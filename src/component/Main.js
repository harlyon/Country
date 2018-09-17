import React, { Component } from 'react';
import axios from 'axios';
import './Main.css';
import Content from './Content';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            query: ''
        }
    }

    componentDidMount() {
        this.onSearch();
    }

    inputChange = (e) => {
        this.setState({ query: e.target.value })
    }
    

    onSearch = () => {
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.query}?fullText=true`)
        .then(res => {
            // const countries = JSON.parse(res.data)
            console.log(res.data);
            this.setState({ countries: res.data});            
        })
        .catch(error => {
            console.log(error);
        })
    }
    

    render() {
        return (
            <div id="fullsingle" className="page-template-page-fullsingle-split">
             <div className="fs-split">
                 {/* Image Side */}
            <div className="split-image">
                <div className="webflow-style-input">
            <input type="text"  placeholder="Enter Country!" onChange={this.inputChange} />
            <button type="submit" onClick={this.onSearch}><i className="icon ion-md-arrow-dropright-circle"></i></button>
        </div>
        </div>
          {/* Content Side */}
          <Content countries={this.state.countries} />  
      </div>
            </div>
        );
    }
}

export default Main;