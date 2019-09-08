import React, { Component } from 'react'
import './Converter.css'

export default class Converter extends Component {

    constructor(props){
        super(props)

        this.state = {
            moneyA_value: "",
            moneyB_value: 0,
        }

        this.converter = this.converter.bind(this)
    }

    converter() {
        let from_to = `${this.props.moneyA}_${this.props.moneyB}`
        let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=f370812b9b0bf420168d`
        
        fetch(url)
            .then(res=> {
                return res.json()
            })
            .then(json=> {
                let quote = json[from_to]
                let moneyB_value = (parseFloat(this.state.moneyA_value) * quote).toFixed(2)
                this.setState({ moneyB_value })
            })
    }

    render(){
        return(
            <div className="converter">
                <h2>{this.props.moneyA} to {this.props.moneyB}</h2>
                <input type="text" onChange={(e)=> {this.setState({moneyA_value: e.target.value})}}></input>
                <input type="button" value="Convert" onClick={this.converter}></input>
                <h2>Result: {this.state.moneyB_value}</h2>
            </div>
        )
    }
}