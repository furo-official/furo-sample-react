import { Tabs } from 'antd';
import axios from 'axios';
import { useFuro } from 'furo-react';
import { useContext, useEffect, useState } from 'react';
import { ConfigContext } from '../contexts/ConfigContext';

const items = [
  {
    key: 'user',
    label: `User`,
  },
];

const Tab = () => {
  const { getAccessTokenSilently } = useFuro();
  const { setPage, setWorkspaces } = useContext(ConfigContext);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();

  const getWorkspace = async () => {
    const token = await getAccessTokenSilently();
    setToken(token);
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL || 'https://api.furo.one'}/workspaces/joined/search`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    const list = response.data;
    if (list.length > 0) {
      if (items.length < 2)
        items.push({
          key: 'workspace',
          label: `Workspace`,
        });
    }
    setWorkspaces(list);
  };

  useEffect(() => {
    (async () => {
      await getWorkspace();
      setLoading(false);
    })();
    // eslint-disable-next-line
  }, []);

  const onChange = (key) => {
    setPage(key);
  };
  if (loading) return null;
  if (!token) return null;
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};
export default Tab;
