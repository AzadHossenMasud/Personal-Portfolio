import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className=" max-w-7xl mx-auto">
      <Toaster />
     <Home></Home>

    </div>
  );
}

export default App;
