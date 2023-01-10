import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './components/root/App';
import { io, Socket } from "socket.io-client";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const socket: Socket = io('http://localhost:3000', {
  auth: {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp'
  },
  query: {
    organizationId: 'dummy2'
  }
});

const SocketContext = createContext(socket);

root.render(
  <SocketContext.Provider value={socket}>
    <App />
  </SocketContext.Provider>
);

