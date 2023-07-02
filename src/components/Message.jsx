import React from 'react';

import '../assets/styles/Message.css';

const Message = props => (
    
    <div className={`message-container ${props.tipo}`}>
        <p>{props.contenido}</p>
    </div>
);

export default Message;