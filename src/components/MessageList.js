import React from 'react'

class MessageList extends React.Component{
  render(){
    console.log(this.props.messages)
    return(
      <ul className='listStyle'>
        {this.props.messages.map((message) =>{
          return (
            <li key = {message.senderId}>
              <div className='senderId'>
                {message.senderId}
              </div>
              <div className='message-list'>
                {message.text}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}
export default MessageList
