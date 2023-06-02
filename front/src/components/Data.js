import React, { Component } from 'react'
import data from './data/data'
import getData from './data/data';
export default class Data extends Component {
    state={
        datas:[],
    }
    
    componentDidMount(){
        this.getNft();
    }

    getNft=()=>{
        this.setState({datas:data})
    }
    

  render() {
    return (
      <div>{this.props}</div>
    )
  }
}
