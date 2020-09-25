import React from 'react';
import { useLocalStore, useObserver } from "mobx-react";

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
      <main>Bugs!!!</main>
      </StoreProvider>
  );
}

export default App;
