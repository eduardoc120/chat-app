import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { selectConversation, createConversation, changeLeftColumn, deleteConversation } from '../actions';

import '../assets/styles/ContactCard.css';

import muteIcon from '../assets/static/mute.svg';

const ContactCard = props => {

    const handleClick = e => {

        if (props.currentChat && props.currentChat !== props.chat && props.currentChat.mensajes.length === 0) {
            props.deleteConversation(props.currentChat.id);
        }
        
        if (props.tipo === "chat") {
            props.selectConversation(props.chat);
        } else if (props.tipo === "contact") {

            const selectedContactChat = props.chats.filter(chat => chat.destinatario.id === props.contacto.id);

            if (selectedContactChat.length === 0) {
                props.createConversation({
                    destinatario: {
                        ...props.contacto
                    },
                    mensajes: [],
                    id: Math.random(),
                    silenciado: false,
                    seleccionado: true
                });
            } else {
                props.selectConversation(selectedContactChat[0]);
            }

            props.changeLeftColumn("chats");

        }
    }

    useEffect(() => {

        if (props.currentChat && props.tipo === "chat") {
            document.getElementsByClassName("chat-seleccionado")[0] && document.getElementsByClassName("chat-seleccionado")[0].classList.remove("chat-seleccionado");
            document.getElementById(props.currentChat.id) && document.getElementById(props.currentChat.id).classList.add("chat-seleccionado");
        }
        
    }, [props.currentChat, props.tipo]);

    return (
        <div className="Contact-card" onClick={handleClick} id={props.id ? props.id : null}>
            <div className="Contact-photo"></div>
                {   props.tipo === "chat" ?
                        <>

                            <div className="Contact-info">
                                <h4>{props.chat.destinatario.contactName}</h4>
                                <p>{props.chat.mensajes[props.chat.mensajes.length - 1] && props.chat.mensajes[props.chat.mensajes.length - 1].contenido}</p>
                            </div>

                            { props.chat.silenciado &&
                                <img src={muteIcon} alt="mute icon"/>
                            }

                        </>
                    :
                        <>

                            <div className="Contact-info">
                                <h4>{props.contacto.contactName}</h4>
                                <p>{props.contacto.estado}</p>
                            </div>

                        </>
                }
        </div>
    );
}

const mapDispatchToProps = {
    selectConversation,
    createConversation,
    changeLeftColumn,
    deleteConversation
};

const mapStateToProps = state => ({
    currentChat: state.currentConversation,
    chats: state.currentUser.conversaciones
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactCard);
