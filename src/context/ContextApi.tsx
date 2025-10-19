import React, { useState } from "react";

interface IContextApiValues {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContextApiContext = React.createContext<IContextApiValues>({
  expanded: false,
  setExpanded: () => {},
});

export const useContextApi = () => React.useContext(ContextApiContext);

const ContextApi = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  const values = {
    expanded,
    setExpanded,
  };
  return (
    <ContextApiContext.Provider value={values}>
      {children}
    </ContextApiContext.Provider>
  );
};

export default ContextApi;
