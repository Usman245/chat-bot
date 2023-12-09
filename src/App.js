import './App.css';
import Main from './components/Home.jsx'
import { MyContextProvider } from './components/Provider.jsx';

function App() {
  return (
    <div className='flex flex-col justify-between h-screen bg-gray-800 min-h-screen'>
      <MyContextProvider>
        <Main />
      </MyContextProvider>
    </div>
  );
}

export default App;
