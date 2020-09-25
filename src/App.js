import React from 'react';
import { useLocalStore,  observer  } from "mobx-react";
// import { observer } from 'mobx-react';
// import { observable } from "mobx"

const StoreContext = React.createContext();


const StoreProvider = ({ childern }) => {
  const store = useLocalStore(() => ({
    bugs: ["Centiped"]
  }));

  return (
    <StoreContext.Provider>{childern}</StoreContext.Provider>
  )

};

const BugsList = () => {
  const store = React.useContext(StoreContext);

  return(
    <ul>
      {
        store.bugs.map(bug => (
        <li key={bug}>{bug}</li>
        ))
      }
      </ul>
  );
};


function App() {
  return (
    <StoreProvider>
      <main><BugsList /></main>
      </StoreProvider>
  );
}

export default App;
