import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { modifyUserInfo, changeLeftColumn } from '../actions/';

import '../assets/styles/UserMenu.css';

const UserMenu = props => {

    const [ state, setValues ] = useState({
        username: props.username,
        phone: props.phone,
        email: props.email,
        estado: props.estado
    });

    const inputHandler = e => {
        setValues({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        
        if (props.username !== state.username || props.phone !== Number(state.phone) || props.email !== state.email || props.estado !== state.estado) {
            document.getElementById("user-info-save-button").classList.remove("disabled");
        } else {
            document.getElementById("user-info-save-button").classList.add("disabled");
        }

    }, [state, props] );

    const buttonClickHandler = () => {
        props.modifyUserInfo({
            ...state,
            phone: Number(state.phone)
        });
        props.changeLeftColumn("chats");
    };

    return (
        <>
            <div className="exit-icon" onClick={e => props.changeLeftColumn("chats")}>&#x2715;</div>
            <div className="user-menu-photo"></div>
            <div className="user-inputs-container centrado">

                <div className="centrado" >
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" value={state.username} onChange={inputHandler} />
                </div>

                <div className="centrado" >
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" value={state.phone} onChange={inputHandler} />
                </div>

                <div className="centrado" >
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={state.email} onChange={inputHandler} />
                </div>

                <div className="centrado" >
                    <label htmlFor="estado">Estado</label>
                    <input type="text" name="estado" value={state.estado} onChange={inputHandler} />
                </div>

            </div>
            
            <button className="user-save-button" id="user-info-save-button" onClick={buttonClickHandler} >Save</button>
        </>
    );
}

const mapStateToProps = state => ({
    username: state.currentUser.username,
    phone: state.currentUser.phone,
    email: state.currentUser.email,
    estado: state.currentUser.estado
});

const mapDispatchToProps = {
    modifyUserInfo,
    changeLeftColumn
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
