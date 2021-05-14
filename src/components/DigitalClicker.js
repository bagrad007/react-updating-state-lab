// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    buttonClicked(e) {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }


    render() {
        return (
            <div>
                <button onClick={(e) => this.buttonClicked(e)}>{this.state.timesClicked}</button>
                <label>{this.state.timesClicked}</label>
            </div>
        )
    }
}
