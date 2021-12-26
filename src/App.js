import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login/Login';
import Resister from './pages/Login/Resister/Resister';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="/resister" element={<Resister />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
