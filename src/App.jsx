import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Consultation } from './pages/Consultation';
import { Dashbord } from './pages/Dashbord';
import { Login } from './pages/Login';
import { Patients } from './pages/Patients';
import { Reports } from './pages/Reports';
import { About } from './pages/About';
import PrivateRoute from './PrivateRoute';
import AuthState from './contextApi/authContext/ContextState';
import Layout from './components/Layout';
import AssistantAI from './pages/AssistantAi';

const App = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashbord />} />
            <Route path="consultations" element={<Consultation />} />
            <Route path="patients" element={<Patients />} />
            <Route path="reports" element={<Reports />} />
            <Route path="assistantai" element={<AssistantAI />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthState>
  );
};

export default App
