import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import { createMessage } from '../actions/';

import '../assets/styles/OpenChat.css';
import sendIcon from '../assets/static/send.svg';
import Message from './Message';

const OpenChat = props => {
    
    useEffect(() => {
        if (props.currentChat) {
            document.getElementById("open-chat-container").scrollTop = document.getElementById("open-chat-container").scrollHeight;
        }
    });
    
    const sendMessage = e => {
        const messageText = document.getElementById("message-input").value;
        if (messageText) {
            props.createMessage({
                contenido: messageText,
                fecha: "26/4/2021",
                hora: "8:10",
                recibido: true,
                leido: false,
                tipo: "enviado",
                id: Math.random()
            });
        }
    };

    const KeyUpHandler = e => {
        if (!props.currentChat.destinatario.bloqueado && e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <>
            { props.currentChat ?

                <>
                    <div className="Open-chat" id="open-chat-container">
                        <div className="mensajes">
                            <div className="info-message"><p>Chat created with web chat app</p></div>
                            { props.currentChat.mensajes.map(mensaje => <Message key={mensaje.id} {...mensaje} />) }
                            {props.currentChat.destinatario.bloqueado && <div className="info-message"><p>You blocked this contact, unblock him to send him a message</p></div>}
                        </div>
                    </div>
                    <div className="message-input-container centrado">
                        <input type="text" placeholder="Type your message..." id="message-input" onKeyUp={KeyUpHandler} />
                        <div className={props.currentChat.destinatario.bloqueado ? "centrado disabled" : "centrado"} onClick={sendMessage}>
                            <img src={sendIcon} alt="send icon"/>
                        </div>
                    </div>
                </>

                :

                <div></div>

            }
        </>
    );
}

const mapStateToProps = state => ({
    currentChat: state.currentConversation
});

const mapDispatchToProps = {
    createMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenChat);
