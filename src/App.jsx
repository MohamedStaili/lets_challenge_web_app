import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import {Consultation} from './pages/Consultation'
import {Dashbord} from './pages/Dashbord'
import {Login} from './pages/Login'
import {Patients} from './pages/Patients'
import {PatientDetails} from './pages/PatientDetails'
import {Reports} from './pages/Reports'
import {Ressources} from './pages/Ressources'
import {Sidebar} from './components/Sidebar'
//import {Header} from './components/Header'
import {About} from './pages/About'
import PrivateRoute from './PrivateRoute';
import AuthState from './contextApi/authContext/ContextState';
import Navbar from './components/Sidebar2';
 const App =()=> {



  return (
    <AuthState>
    
      <BrowserRouter>
      <Routes>
      
      
        {/* public routes */}
        <Route path='/about' element={<About/>}/>

        <Route path='/login' element={<Login/>}/>
        

        {/*  protected routes */}
        <Route path='/' element={<Navbar/>}>
        

        <Route index element={<PrivateRoute element={Dashbord}/>}/>
        <Route path='consultations' element={<PrivateRoute element={Consultation}/>}/>
        <Route path='patientdetails' element={<PrivateRoute element={PatientDetails}/>}/>
        <Route path='patients' element={<PrivateRoute element={Patients}/>}/>
        <Route path='reports' element={<PrivateRoute element={Reports}/>}/>
        <Route path='ressources' element={<PrivateRoute element={Ressources}/>}/>

      </Route>
      </Routes>
      </BrowserRouter>
      </AuthState>
      
      
   
  );
}

export default App;
