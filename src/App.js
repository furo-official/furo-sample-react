import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { ConfigProvider } from './contexts/ConfigContext';

import Layout from './screens/Layout';
import NoMatch from './screens/NoMatch';
import Home from './screens/Home';

export default function App() {
  /* Insert client ID from Your Furo console */
  const clientId = process.env.REACT_APP_CLIENT_ID || 'YOUR_CLIENT_ID_GOES_HERE';

  return (
    <ConfigProvider clientId={clientId}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout auth={false} />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
          <Route path="/:pid" element={<Layout auth={false} />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}
