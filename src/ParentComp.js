import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "ashish"
        }
    }
    
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"ashish"
            })
        },2000)
    }
    render() {
        console.log("********Parents component Reder**********")
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
