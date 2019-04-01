import React, { Component } from 'react';

import './MessagesList.scss';

import MessageItem from '../../containers/MessageItem';

class MessagesList extends Component {
  markAsRead() {
    console.log('read');
  }

  componentDidUpdate(prevProps) {
    if(this.props.selected !== prevProps.selected) {
      this.props.getMessagesList(this.props.selected);
    }
  }

  render() {
    return (
      <ol className="messagesList">
        { this.props.messages.map(message => 
          <li key={message.id}>
            <MessageItem idList={this.props.selected} {...message} />
          </li>
        ) }
      </ol>
    );
  }
}

export default MessagesList;
