import React from 'react'

class SendList extends React.Component{
  render(){
    return(
      <div className='footer'>
        <div>
          <p>cam</p>
        </div>
        <div className='submitContainer'>
          <input className='textSubmit' type='text' placeholder='Type Message'>
          </input>
        </div>
        <div>
          <h3 className='lightGrey'>Send</h3>
        </div>
      </div>

    )
  }
}
export default SendList
