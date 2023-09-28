import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './routes/routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
