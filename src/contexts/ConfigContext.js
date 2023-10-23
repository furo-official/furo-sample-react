import React, { createContext, useEffect, useState } from 'react';

export const ConfigContext = createContext(null);

export const ConfigProvider = ({ children, clientId }) => {
  const [hasClientId, setHasClientId] = useState(false);
  const [clientIdState, setClientId] = useState(clientId);
  const [page, setPage] = useState('user');
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    setHasClientId(clientIdState !== 'YOUR_CLIENT_ID_GOES_HERE');
  }, [clientIdState]);

  return (
    <ConfigContext.Provider
      value={{
        hasClientId,
        page,
        setPage,
        workspaces,
        setWorkspaces,
        clientId: clientIdState,
        setClientId,
      }}
    >
      <>{children}</>
    </ConfigContext.Provider>
  );
};
