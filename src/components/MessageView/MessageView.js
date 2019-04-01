import React, {Component} from 'react';
import moment from 'moment';

import './MessageView.scss';

class MessageView extends Component {

	render() {
		if(this.props.message.body) {
			return (
			    <article className={`messageView ${(this.props.visible) ? 'messageView--visible' : ''}`}>
			    	<header className="messageView__header">
			    		<div className={`mypro-icon mypro-icon-${this.props.message.type}`}></div>
			    		<div className="messageView__contact">
				    		<div class="messageView__author">{this.props.message.contact.firstname} {this.props.message.contact.lastname}</div>
				    		<div>Email : <strong>{this.props.message.contact.email}</strong></div>
				    		<div>Téléphone : <strong>{this.props.message.contact.phone}</strong></div>
			    		</div>
			    		<button className="messageView__backBtn" type="button" onClick={this.props.closeMessage}>Retour</button>
			    	</header>
			    	<div className="messageView__content">
				    	<div class="messageView__author">{this.props.message.contact.firstname} {this.props.message.contact.lastname}</div>
				    	<div className="messageView__date">{moment(this.props.message.date).fromNow()}</div>
			    		<div className="messageView__body">{this.props.message.body}</div>
			    	</div>
			    </article>
		  	);
		}else {
			return null;
		}
	}
}

export default MessageView;