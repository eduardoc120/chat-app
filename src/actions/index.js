export const loginRequest = payload => ({
    type: 'LOGIN_REQUEST',
    payload,
});

export const selectConversation = payload => ({
    type: 'SELECT_CONVERSATION',
    payload
});

export const addContact = payload => ({
    type: 'ADD_CONTACT',
    payload
});

export const changeLeftColumn = payload => ({
    type: 'CHANGE_LEFT_COLUMN',
    payload
});

export const changeContactsMenu = payload => ({
    type: 'CHANGE_CONTACTS_MENU',
    payload
});

export const modifyUserInfo = payload => ({
    type: 'MODIFY_USER_INFO',
    payload
});

export const silenceConversationToggle = payload => ({
    type: 'SILENCE_CONVERSATION_TOGGLE',
    payload
});

export const createConversation = payload => ({
    type: 'CREATE_CONVERSATION',
    payload
});

export const deleteConversation = payload => ({
    type: 'DELETE_CONVERSATION',
    payload
});

export const deleteAllConversations = payload => ({
    type: 'DELETE_ALL_CONVERSATIONS',
    payload
});

export const createMessage = payload => ({
    type: 'CREATE_MESSAGE',
    payload
});

export const blockContactToggle = payload => ({
    type: 'BLOCK_CONTACT_TOGGLE',
    payload
});
