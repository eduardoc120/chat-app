import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { addContact, changeLeftColumn, changeContactsMenu } from '../actions';

import SearchBar from './SearchBar';
import ContactCard from './ContactCard';

import GoBackIcon from '../assets/static/left-arrow.svg';
import CheckIcon from '../assets/static/check-mark.svg';
import ErrorIcon from '../assets/static/error.svg';
import InfoIcon from '../assets/static/info.svg';

import '../assets/styles/ContactsMenu.css';

const ContactsMenu = props => {

    const [estado, setValues] = useState({
        newContactResult: "added",
        newContactName: '',
        newContactPhoneNumber: '',
        buscando: false,
        resultadosFiltrados: null,
        existingContactName: null
    });

    const handleAddNewContactClick = e => {
        const newContact = props.users.filter(usuario => usuario.phone === Number(estado.newContactPhoneNumber) && usuario.phone !== props.userPhone);
        const contactExists = props.userContacts.filter(contacto => contacto.phone === Number(estado.newContactPhoneNumber) || contacto.contactName === estado.newContactName);

        if (contactExists.length > 0) {
            setValues({...estado, newContactResult: "already-exists", existingContactName: contactExists[0].contactName});
        } else if (newContact[0]) {

            props.addContact({
                id: newContact[0].id,
                contactName: estado.newContactName,
                email: newContact[0].email,
                phone: newContact[0].phone,
                lastConnection: newContact[0].lastConnection,
                estado: newContact[0].estado,
                bloqueado: newContact[0].bloqueado
            });

        } else {
            setValues({...estado, newContactResult: "no-added"});
        }

        props.changeContactsMenu("add-contact-result");

    };

    const handleInput = e => {

        setValues({
            ...estado,
            [e.target.name]: e.target.value
        });

    };

    const searchBarHandler = e => {
        if (e.target.value) {
            setValues({
                ...estado,
                buscando: true,
                resultadosFiltrados: props.userContacts.filter(contact => contact.contactName.toLowerCase().includes(e.target.value.toLowerCase()))
            });
        } else {
            setValues({
                ...estado,
                buscando: false,
                resultadosFiltrados: null
            });
        }
    };

    useEffect(() => {

        if (props.contenido === "add-contact") {

            if (estado.newContactName && estado.newContactPhoneNumber) {
                document.getElementById("add-new-contact").classList.remove("disabled");
            } else {
                document.getElementById("add-new-contact").classList.add("disabled");
            }

        }

    }, [props.contenido, estado.newContactName, estado.newContactPhoneNumber]);

    return (

        <>
            { props.contenido === "contacts" &&
                <>
                    <div className="left-arrow-container" onClick={e => props.changeLeftColumn("chats")}>
                        <img src={GoBackIcon} alt="icon"/>
                    </div>

                    <SearchBar extraClasses="Contacts-menu-search-bar" handler={searchBarHandler} />

                    <div className="add-contact-container centrado">
                        <div className="Contacts-info">
                            <p>Contacts</p>
                            <p>{props.userContacts.length} Added</p>
                        </div>
                        <div className="centrado" onClick={e =>  props.changeContactsMenu("add-contact")} >
                            <span>Add</span>
                            <span className="Contact-plus-icon centrado">&#65122;</span>
                        </div>
                    </div>

                    <div className="Contacts-container">
                        { estado.buscando ?
                            estado.resultadosFiltrados.length > 0 ?
                                estado.resultadosFiltrados.map(contacto => (
                                    <ContactCard 
                                        key={Math.random()} 
                                        tipo="contact" 
                                        contacto={contacto} 
                                    />
                                ))
                                :
                                <div className="centrado">No results</div>
                            : 
                            props.userContacts.map(contacto => (
                                <ContactCard 
                                    key={Math.random()} 
                                    tipo="contact" 
                                    contacto={contacto} 
                                />
                            ))
                        }
                    </div>
                </>
            }

            { props.contenido === "add-contact" &&
                <>
                    <div className="left-arrow-container" onClick={e => props.changeContactsMenu("contacts") } >
                        <img src={GoBackIcon} alt="icon"/>
                    </div>

                    <h4 className="new-contact-title">Add new contact</h4>

                    <input 
                        type="text" 
                        className="new-contact-input" 
                        placeholder="Name" 
                        name="newContactName"
                        onChange={handleInput}
                    />
                    <input 
                        type="number" 
                        className="new-contact-input" 
                        placeholder="Phone Number" 
                        name="newContactPhoneNumber"
                        onChange={handleInput} 
                    />

                    <button className="new-contact-button disabled" id="add-new-contact" onClick={handleAddNewContactClick}>Add</button>
                </>
            }

            { props.contenido === "add-contact-result" &&
                <>
                    <img src={estado.newContactResult === "added" ? CheckIcon : estado.newContactResult === "no-added" ? ErrorIcon : InfoIcon} alt="icon" className="result-icon" />

                    <h4 className="new-contact-result-title">{ estado.newContactResult === "added" ? <>New contact <br />succesfully added</> : estado.newContactResult === "no-added" ? <>Sorry, no user<br />was found with this<br />phone number</> : <>This contact<br />already exists with<br />the name {estado.existingContactName}</>}</h4>

                    <button className="new-contact-button" onClick={e => props.changeContactsMenu("contacts")}>Ok</button>
                </>
            }

        </>

    );
}

const mapStateToProps = state => ({
    userPhone: state.currentUser.phone,
    userContacts: state.currentUser.contactos,
    users: state.users,
    contenido: state.contactsMenu 
});

const mapDispatchToProps = {
   addContact,
   changeLeftColumn,
   changeContactsMenu,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsMenu);