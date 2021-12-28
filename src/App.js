import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Resister from './pages/Login/Resister/Resister';
import NotFound from './pages/NotFound/NotFound';
import Parcels from './pages/Parcels/Parcels/Parcels';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <main style={{ minHeight: "80vh" }}>
            <Header />
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
