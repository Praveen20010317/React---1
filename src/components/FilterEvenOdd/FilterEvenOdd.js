import React, { Component } from 'react'
import './App.css'
export default class FilterEvenOdd extends Component {
    constructor() {
        super();
        this.state = {input: '', odd: false, even: false, item1: [] }
    }
    handleChange(event) {
        var val = event.target.value;
        this.state.item1.length = 0;
        this.setState({input : val, generate : false})
    }
    handleSubmit(event) {
        event.preventDefault();
        var add = this.state.item1.concat((this.state.input).split(' '));
        this.setState({ input: '', generate : true, item1 : add })
    }
    odd() {
        this.setState({ odd : true, even : false })
    }
    even() {
        this.setState({ even : true, odd : false })
    }
    render() {
        return (
            <div className="App">
                <h1>Number Filter</h1>
                <input data-testid="numberOfInput" id="numberOfInput" onChange={this.handleChange.bind(this)} placeholder="Enter the number of inputs"></input>
                <button data-testid="generateNumber" id="generateNumber" onClick={this.handleSubmit.bind(this)}>Generate Random Number</button>
                <br/>
                <br/>
                {   
                    this.state.item1.map((p, i) => {
                        if(p !== '') {
                            return (
                                <div id="box" data-testid="originalList" key={i}>{p}</div>  
                            )
                        }
                    })
                }
                <br/>
                <div id="buttonContainer">
                    <button data-testid="oddbutton" id="oddbutton" onClick={this.odd.bind(this)} >ODD</button>
                    <button data-testid="evenbutton" id="evenbutton" onClick={this.even.bind(this)} >EVEN</button>
                </div>
                <h1>Filtered Array</h1>
                <br/>
                {
                    this.state.odd ?
                        this.state.item1.map((p, i) => {
                            if(p % 2 !== 0 && p !== '') {
                                return (
                                    <div id="box" data-testid="filteredList" key={i}>{p}</div>
                                )
                            }
                        })
                    : ''
                }
                {
                    this.state.even ?
                        this.state.item1.map((p, i) => {
                            if(p % 2 === 0 && p !== '') {
                                return (
                                  <div id="box" data-testid="filteredList" key={i}>{p}</div>
                                )
                            }

                        })
                    : ''
                }
            </div>
        )
    }
}
