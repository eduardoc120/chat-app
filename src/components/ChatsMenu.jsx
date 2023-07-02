import React, { useState } from 'react';
import { connect } from 'react-redux';

import { changeLeftColumn, deleteAllConversations } from '../actions/';

import '../assets/styles/ChatsMenu.css';
import ContactCard from './ContactCard';
import SearchBar from './SearchBar';

const ChatsMenu = props => {

    const [ estado, setValues ] = useState({
        buscando: false,
        resultadosFiltrados: null
    });

    const togglePopup = () => {

        let elementoHtml = document.getElementById("chats-options-popup");

        if (elementoHtml.style.display === "block") {
            elementoHtml.style.display = "none";
            document.getElementById("three-points-chats-menu").style.color = "#fff";
        } else {
            elementoHtml.style.display = "block";
            document.getElementById("three-points-chats-menu").style.color = "#ffffff40";
        }

    }

    const searchBarHandler = e => {
        if (e.target.value) {
            setValues({
                buscando: true,
                resultadosFiltrados: props.chats.filter(chat => chat.destinatario.contactName.toLowerCase().includes(e.target.value.toLowerCase()))
            });
        } else {
            setValues({
                buscando: false,
                resultadosFiltrados: null
            });
        }
    }

    return (
        <>
            <div className="create-new-chat-container centrado" onClick={e => props.changeLeftColumn("contacts")} >
                <div className="plus-icon centrado">&#65122;</div>
                <h4>Create New</h4>
            </div>
            <div className="chats-options centrado">
                <h4>Chats</h4>
                <span className="three-points-icon chats-menu-icon" id="three-points-chats-menu" onClick={togglePopup}>&#8942;</span>
                <div className="chats-options-popup" id="chats-options-popup">
                    <div onClick={e => props.deleteAllConversations()}>Eliminar todos los chats</div>
                </div>
            </div>
            <SearchBar handler={searchBarHandler} />
            <div className="chats-container">
                { estado.buscando ?
                    estado.resultadosFiltrados.length > 0 ?
                        estado.resultadosFiltrados.map(chat => (
                            <ContactCard 
                                key={chat.id}
                                id={chat.id}
                                chat={chat}
                                tipo="chat"
                            />
                        ))
                        :
                        <div className="centrado">No results</div>
                    :
                    props.chats.map(chat => (
                        <ContactCard 
                            key={chat.id}
                            id={chat.id}
                            chat={chat}
                            tipo="chat"
                        />
                    ))
                }
            </div>
        </>
    );
}

const mapStateToProps = state => ({ chats: state.currentUser.conversaciones });

const mapDispatchToProps = {
    changeLeftColumn,
    deleteAllConversations
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatsMenu);
