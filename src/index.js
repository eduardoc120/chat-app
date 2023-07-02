import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
  currentUser: {
    id: 1000,
    username: "Juanito",
    email: "juansito@juan.com",
    phone: 60607272,
    estado: "Disponible",
    contactos: [
      {
        id: 1100,
        contactName: "John Hernandez",
        email: "john@hernandez.com",
        phone: 64666842,
        estado: 'Disponible',
        lastConnection: "1 hour ago",
        bloqueado: false
      },
      {
        id: 1200,
        contactName: "Pedrito",
        email: "pedrito@gmail.com",
        phone: 67557261,
        estado: 'Disponible',
        lastConnection: '5 hours ago',
        bloqueado: false
      }
    ],
    conversaciones: [
      {
        destinatario: {
          id: 1100,
          contactName: "John Hernandez",
          email: "john@hernandez.com",
          phone: 64666842,
          lastConnection: "1 hour ago",
          estado: 'Disponible',
          bloqueado: false
        },
        mensajes: [
          {
            contenido: "hola, como estas",
            fecha: "26/4/2021",
            hora: "8:10",
            recibido: true,
            leido: true,
            tipo: "enviado",
            id: 7082
          },
          {
            contenido: "bien y tu",
            fecha: "26/4/2021",
            hora: "8:15",
            recibido: true,
            leido: true,
            tipo: "recibido",
            id: 7083
          },
          {
            contenido: "bien y tu",
            fecha: "26/4/2021",
            hora: "8:15",
            recibido: true,
            leido: true,
            tipo: "recibido",
            id: 7084
          },
          {
            contenido: "bien y tu",
            fecha: "26/4/2021",
            hora: "8:15",
            recibido: true,
            leido: true,
            tipo: "recibido",
            id: 7085
          },
          {
            contenido: "bien y tu",
            fecha: "26/4/2021",
            hora: "8:15",
            recibido: true,
            leido: true,
            tipo: "recibido",
            id: 7086
          },
          {
            contenido: "bien y tu",
            fecha: "26/4/2021",
            hora: "8:15",
            recibido: true,
            leido: true,
            tipo: "recibido",
            id: 7087
          },
          {
            contenido: "bien y tu",
            fecha: "26/4/2021",
            hora: "8:15",
            recibido: true,
            leido: true,
            tipo: "recibido",
            id: 7088
          },
          {
            contenido: "bien y tu",
            fecha: "26/4/2021",
            hora: "8:15",
            recibido: true,
            leido: true,
            tipo: "recibido",
            id: 7089
          },
          {
            contenido: "ben y tu",
            fecha: "26/4/2021",
            hora: "8:15",
            recibido: true,
            leido: true,
            tipo: "recibido",
            id: 7090
          },
          {
            contenido: "bon y tu",
            fecha: "26/4/2021",
            hora: "8:15",
            recibido: true,
            leido: true,
            tipo: "recibido",
            id: 7091
          },
          {
            contenido: "bein y tu",
            fecha: "26/4/2021",
            hora: "8:15",
            recibido: true,
            leido: true,
            tipo: "recibido",
            id: 7092
          }
        ],
        id: 924,
        silenciado: true,
        seleccionado: false
      }
    ]
  },
  currentConversation: null,
  users: [
    {
      id: 1000,
      username: "Juanito",
      email: "juansito@juan.com",
      phone: 60607272,
      estado: 'Disponible',
      contactos: [
        {
          id: 1100,
          contactName: "John Hernandez",
          email: "john@hernandez.com",
          phone: 64666842,
          estado: "Disponible",
          lastConnection: "1 hour ago",
          bloqueado: false
        }
      ],
      conversaciones: [
        {
          destinatario: {
            id: 1100,
            contactName: "John Hernandez",
            email: "john@hernandez.com",
            phone: 64666842,
            lastConnection: "1 hour ago",
            estado: 'Disponible',
            bloqueado: false
          },
          mensajes: [
            {
              contenido: "hola, como estas",
              fecha: "26/4/2021",
              hora: "8:10",
              recibido: true,
              leido: true,
              tipo: "enviado",
              id: 7082,
            },
            {
              contenido: "bien y tu",
              fecha: "26/4/2021",
              hora: "8:15",
              recibido: true,
              leido: true,
              tipo: "recibido",
              id: 7083,
            }
          ],
          id: 924,
          silenciado: false,
          seleccionado: false
        }
      ]
    },
    {
      id: 1100,
      username: "Jhonny",
      email: "john@hernandez.com",
      phone: 64666842,
      estado: 'Disponible',
      contactos:[],
      conversaciones: [
        {
          destinatario: {
            id: 1000,
            contactName: "60607272",
            email: "juansito@juan.com",
            phone: 60607272,
            lastConnection: "2 hour ago",
            estado: 'Disponible',
            bloqueado: false
          },
          mensajes: [
            {
              contenido: "hola, como estas",
              fecha: "26/4/2021",
              hora: "8:10",
              recibido: true,
              leido: true,
              tipo: "recibido",
              id: 7082,
            },
            {
              contenido: "bien y tu",
              fecha: "26/4/2021",
              hora: "8:15",
              recibido: true,
              leido: true,
              tipo: "enviado",
              id: 7083,
            }
          ],
          id: 924,
          silenciado: false,
          seleccionado: false
        }
      ]
    },
    {
      id: 1200,
      username: "Pedro Wolf",
      email: "pedrito@gmail.com",
      phone: 67557261,
      estado: 'Disponible',
      contactos:[],
      conversaciones: []
    },
    {
      id: 1300,
      username: "Raul Ward",
      email: "rward@gmail.com",
      phone: 65828846,
      estado: 'Disponible',
      contactos:[],
      conversaciones: []
    }
  ],
  leftColumn: "chats",
  contactsMenu: "contacts"
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
