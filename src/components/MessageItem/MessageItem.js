import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/fr';

import './MessageItem.scss';

moment.locale('fr');

class MessageItem extends Component {

  onClick() {
    this.props.getMessageView(this.props.idList, this.props.id);
  }

  render() {
    return (
      <article onClick={() => this.onClick()} className={`messageItem ${!this.props.read ? 'messageItem--unread' : ''}`}>
        <div className={`mypro-icon mypro-icon-${this.props.type}`}></div>
        <div className="messageItem__content">
          <div className="messageItem__contactName">{this.props.contact.firstname} {this.props.contact.lastname}</div>
          <div className="messageItem__subject">{this.props.subject}</div>
          <div className="messageItem__body">{this.props.body}</div>
        </div>
        <div className="messageItem__date">{moment(this.props.date).fromNow()}</div>
      </article>
    );
  }
}

export default MessageItem;