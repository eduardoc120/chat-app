import React from 'react';
import { connect } from 'react-redux';

import ChatsMenu from './ChatsMenu';
import ContactsMenu from './ContactsMenu';
import UserMenu from './UserMenu';

import '../assets/styles/LeftColumn.css';


const LeftColumn = props => (
        <div className="Left-menu-container">
            { props.menu === "chats" &&
                    <ChatsMenu />
            }
            { props.menu === "contacts" &&
                <ContactsMenu />
            }
            { props.menu === "user-info" &&
                <UserMenu />   
            }
        </div>
);

const mapStateToProps = state => ({
    menu: state.leftColumn
});

export default connect(mapStateToProps, null)(LeftColumn);