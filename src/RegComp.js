import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log("Regular comp render")
        return (
            <div>
                Reg Component {this.props.name}
    
            </div>
        )
    }
}

export default RegComp
