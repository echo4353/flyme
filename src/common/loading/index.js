import React, { Component } from 'react'
import "./index.css"
export default class Loading extends Component {
    render() {
        return (
            <div class="loader">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        )
    }
}
