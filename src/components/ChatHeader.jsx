import React from 'react';
import { connect } from 'react-redux';

import { changeLeftColumn, silenceConversationToggle, deleteConversation, blockContactToggle } from '../actions/';

import '../assets/styles/ChatHeader.css';

const ChatHeader = props => {

    const togglePopup = () => {

        let elementoHtml = document.getElementById("contact-options-popup");

        if (elementoHtml.style.display === "block") {
            elementoHtml.style.display = "none";
            document.getElementById("three-points-header").style.color = "#fff";
        } else {
            elementoHtml.style.display = "block";
            document.getElementById("three-points-header").style.color = "#1A8D55";
        }

    }

    return (
        <div className="Chat-header-container">
            <div className="user-container" onClick={e => props.changeLeftColumn("user-info")}>
                <h4>{props.user.username}</h4>
                <div className="user-image"></div>
            </div>
            { props.chat ?
                <div className="conversation-contact-container">
                    <div className="user-image"></div>
                    <div>
                        <h4>{props.chat.destinatario.contactName}</h4>
                        <p>{props.chat.destinatario.lastConnection}</p>
                    </div>
                    <span className="three-points-icon chat-header-icon" onClick={togglePopup} id="three-points-header">&#8942;</span>
                    <div className="contact-options-popup" id="contact-options-popup">
                        <div className="first" onClick={e => props.silenceConversationToggle(props.chat)}>{props.chat.silenciado ? "Desactivar silencio" : "Silenciar" }</div>
                        <div onClick={e => props.blockContactToggle()}>{props.chat.destinatario.bloqueado ? "Desbloquear" : "Bloquear" }</div>
                        <div className="last" onClick={e => props.deleteConversation(props.chat.id)}>Eliminar chat</div>
                    </div>
                </div>
                :
                null
            }
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.currentUser,
    chat: state.currentConversation
});

const mapDispatchToProps = {
    changeLeftColumn,
    silenceConversationToggle,
    deleteConversation,
    blockContactToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatHeader);
