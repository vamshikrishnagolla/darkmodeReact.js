// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {modechange: false}
  changemode = () => {
    this.setState(prevState => ({modechange: !prevState.modechange}))
  }
  
  render() {
    const {modechange}= this.state
    const bg = modechange ? 'lightcontainer' : 'darkcontainer'
    const headingchange = modechange ? 'blackcolor' : 'whitecolor'
    const buttontext = modechange ? 'Dark Mode' : "Light Mode"

    return (
      <div className="container">
        <div className={`${bg}`}>
          <h1 className={`${headingchange}`}>Click To Change Mode</h1>
          <buttton className="button" onClick={this.changemode}>
            {buttontext}
          </buttton>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
