import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
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
            <Route path="/" element={
              <PrivateRoute><Home /></PrivateRoute>
            }>
              <Route index element={
                <PrivateRoute><Home /></PrivateRoute>
              } />
            </Route>

            <Route path="/home" element={
              <PrivateRoute><Home /></PrivateRoute>
            } />
            <Route path="/parcels" element={
              <PrivateRoute><Parcels /></PrivateRoute>
            } />

            <Route path="/login" element={<Login />} />
            <Route path="/resister" element={<Resister />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
