import './App.css';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form.jsx';
import Profile from './components/Profile.jsx';

function App() {

  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Form/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
