import logo from './logo.svg';
import './App.css';
import Calculadora from './pages/calculadora/calculadora';
import { DisplayContextProvider } from './context';
import Counter from './components/count/count';


function App() {

  return (
    <DisplayContextProvider>
      <Calculadora />
      <Counter />
    </DisplayContextProvider>
  );
}

export default App;
