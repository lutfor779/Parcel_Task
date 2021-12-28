import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Resister from './pages/Login/Resister/Resister';
import Parcels from './pages/Parcels/Parcels/Parcels';
import Navigation from './pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Login />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="/resister" element={<Resister />} />
            <Route path="/home" element={<Home />} />
            <Route path="/parcels" element={<Parcels />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
