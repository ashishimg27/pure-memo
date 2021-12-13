import React, { Component } from 'react'
import MemoComp from './MemoComp'

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
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
