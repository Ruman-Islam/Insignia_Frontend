/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [systemData, setSystemData] = useState({});

  return (
    <DataContext.Provider value={{ auth, setAuth, systemData, setSystemData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
