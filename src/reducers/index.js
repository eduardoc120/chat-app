const reducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                user: action.payload,
            };
        case 'SELECT_CONVERSATION':
            return {
                ...state,
                currentConversation: action.payload
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                currentUser: {...state.currentUser, contactos: [...state.currentUser.contactos, action.payload] }
            };
        case 'CHANGE_LEFT_COLUMN':
            return {
                ...state,
                leftColumn: action.payload
            };
        case 'CHANGE_CONTACTS_MENU':
            return {
                ...state,
                contactsMenu: action.payload
            };
        case 'MODIFY_USER_INFO':
            return {
                ...state,
                currentUser: {...state.currentUser, username: action.payload.username, email: action.payload.email, phone: action.payload.phone, estado: action.payload.estado}
            };
        case 'SILENCE_CONVERSATION_TOGGLE':
            return {
                ...state,
                currentUser: {...state.currentUser, conversaciones: [{...action.payload, silenciado: !action.payload.silenciado }, ...state.currentUser.conversaciones.filter(conversacion => conversacion.id !== action.payload.id)] },
                currentConversation: {...action.payload, silenciado: !action.payload.silenciado }
            }
        case 'CREATE_CONVERSATION':
            return {
                ...state,
                currentUser: {...state.currentUser, conversaciones: [action.payload, ...state.currentUser.conversaciones]},
                currentConversation: action.payload
            }
        case 'DELETE_CONVERSATION':
            return {
                ...state,
                currentUser: {...state.currentUser, conversaciones: state.currentUser.conversaciones.filter(conversacion => conversacion.id !== action.payload)},
                currentConversation: null
            }
        case 'DELETE_ALL_CONVERSATIONS':
            return {
                ...state,
                currentUser: {...state.currentUser, conversaciones: []},
                currentConversation: null
            }
        case 'CREATE_MESSAGE':
            return {
                ...state,
                currentUser: {...state.currentUser, conversaciones: [{...state.currentConversation, mensajes: [...state.currentConversation.mensajes, action.payload]}, ...state.currentUser.conversaciones.filter(conversacion => conversacion.id !== state.currentConversation.id)]},
                currentConversation: {...state.currentConversation, mensajes: [...state.currentConversation.mensajes, action.payload]}
            }
        case 'BLOCK_CONTACT_TOGGLE':
            return {
                ...state,
                currentUser: {
                    ...state.currentUser, 
                    conversaciones: [
                        {
                            ...state.currentConversation, 
                            destinatario: {
                                ...state.currentConversation.destinatario, 
                                bloqueado: !state.currentConversation.destinatario.bloqueado
                            }
                        },
                        ...state.currentUser.conversaciones.filter(conversacion => conversacion.id !== state.currentConversation.id)
                    ],
                    contactos: [
                        ...state.currentUser.contactos.filter(contacto => contacto.id !== state.currentConversation.destinatario.id),
                        {
                            ...state.currentConversation.destinatario,
                            bloqueado: !state.currentConversation.destinatario.bloqueado
                        }
                    ]
                },
                currentConversation: {
                    ...state.currentConversation, 
                    destinatario: {
                        ...state.currentConversation.destinatario, 
                        bloqueado: !state.currentConversation.destinatario.bloqueado
                    }
                }
            }
        default: 
            return state;
    }
};

export default reducer;
