import React, { createContext, useEffect, useState } from "react";

export const ConfigContext = createContext(null);

export const ConfigProvider = ({ children, clientId }) => {
  const [hasClientId, setHasClientId] = useState(false);
  const [page, setPage] = useState("user");
  const [workspaces, setWorkspaces] = useState([]);

  useEffect(() => {
    setHasClientId(clientId !== "YOUR_CLIENT_ID_GOES_HERE");
  }, [clientId]);

  return (
    <ConfigContext.Provider
      value={{
        hasClientId,
        clientId,
        page,
        setPage,
        workspaces,
        setWorkspaces,
      }}
    >
      <>{children}</>
    </ConfigContext.Provider>
  );
};
