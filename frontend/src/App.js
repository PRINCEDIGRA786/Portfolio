
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import FormComponent from './components/Formcompo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortState from './contextapi/PortState';
import DashBoard from './components/Dashboard.jsx';
import UsersPage from './components/UsersPage.jsx';
import User from './components/User';
function App() {
  const id = null;
  return (
    <PortState>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path={`/user/:${id}`} element={<User />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/login" element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<FormComponent />} />
          <Route path='/dashboard' element={<DashBoard />} />


        </Routes>
      </BrowserRouter>

    </PortState>
  );
}

export default App;
