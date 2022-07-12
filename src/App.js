import Main from './components/Main/Main';
import { AppContextProvider } from "./contexts/MainContext";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <AppContextProvider>
      <Main className="App"/>
    </AppContextProvider>
  )
}

export default App;
