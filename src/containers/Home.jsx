import React from 'react';

import ChatHeader from '../components/ChatHeader';
import LeftColumn from '../components/LeftColumn';
import OpenChat from '../components/OpenChat';

const Home = () => (
    <>
        <OpenChat />
        <ChatHeader />
        <LeftColumn />
    </>
);

export default Home;