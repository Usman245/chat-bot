import './App.css';
import Main from './components/Home.jsx'
import { MyContextProvider } from './components/Provider.jsx';

function App() {
  return (
    <div className='flex flex-col justify-between h-screen bg-gray-700 min-h-screen font-primary'>
      <MyContextProvider>
        <Main />
      </MyContextProvider>
    </div>
  );
}

export default App;
