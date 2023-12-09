import './App.css';
import Main from './components/Home.jsx'
import { MyContextProvider } from './components/Provider.jsx';

function App() {
  return (
    <div className='bg-gray-800 h-screen'>
      <MyContextProvider>
        <Main />
      </MyContextProvider>
    </div>
  );
}

export default App;
