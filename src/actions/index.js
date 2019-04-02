export const setRealtorsList = data => ({
	type: 'SET_REALTORS_LIST',
	data
});

export const setRealtor = id => ({
  type: 'SET_REALTOR',
  id
});

export const setMessagesList = data => ({
	type: 'SET_MESSAGES_LIST',
	data
});

export const markAsRead = id => ({
  type: 'MARK_AS_READ',
  id
});

export const setMessageView = data => ({
	type: 'SET_MESSAGE_VIEW',
	data
});

export const showMessageView = visibility => ({
	type: 'SHOW_MESSAGE_VIEW',
	visibility
});

export const closeMessageView = visibility => ({
	type: 'CLOSE_MESSAGE_VIEW',
	visibility
});

export const setUnreadMessages = number => ({
	type: 'SET_UNREAD_MESSAGES',
	number
});