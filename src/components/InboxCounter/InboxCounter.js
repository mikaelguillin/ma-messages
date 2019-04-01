import React from 'react';

import './InboxCounter.scss';

function InboxCounter(props) {
  return (
    <div className={`inboxCounter ${props.number > 0 ? 'inboxCounter--new' : ''}`}>
    	<div className="mypro-icon mypro-icon-email"></div>
    	<div>{props.number}</div>
    </div>
  );
}

export default InboxCounter;