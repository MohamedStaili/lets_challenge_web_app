import './App.css';
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import {Consultation} from './pages/Consultation'
import {Dashbord} from './pages/Dashbord'
import {Login} from './pages/Login'
import {Patients} from './pages/Patients'
import {PatientDetails} from './pages/PatientDetails'
import {Reports} from './pages/Reports'
import {Ressources} from './pages/Ressources'
import {Sidebar} from './components/Sidebar'
import {Header} from './components/Header'
import {About} from './pages/About'
 const App =()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
      <Route path='/' element={<Sidebar/>}>
        {/* public routes */}
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        

        {/*  protected routes */}

        <Route index element={<Dashbord/>}/>
        <Route path='consultations' element={<Consultation/>}/>
        <Route path='patientdetails' element={<PatientDetails/>}/>
        <Route path='patients' element={<Patients/>}/>
        <Route path='reports' element={<Reports/>}/>
        <Route path='ressources' element={<Ressources/>}/>

      </Route>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
