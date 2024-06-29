import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import React from 'react';
import {HashRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './componant/Home';
import SignUP from './componant/Register/SignUP';
import Error from './componant/Error';
import Signin from './componant/Signin';
import ContactUs from './componant/ContactUs';
import Patiant from './componant/Patiant';
import Blood_Pressure from './componant/Blood_Pressure';
import Record from './componant/Record';
import DoctorRegister from './componant/Register/Doctor';
import Ph_lab_xRayRegister from './componant/Register/Ph_lab_x-ray_Clinic';
import PatiantRegister from './componant/Register/Patiant';
import { Suspense, useEffect } from 'react';
import FindPatient from './componant/FindPatient';
import RequierdScans_Prescriptions from './componant/RequierdScans_Prescriptions';
const Rosheta = React.lazy(() => import('./componant/Rosheta'));
const Tahalil = React.lazy(() => import('./componant/Tahalil'));
const Ashea = React.lazy(() => import('./componant/Ashea'));

function App() {
//   useEffect(()=>{
//     document.title='Life App'
//   },[])
  return (
    <Suspense fallback={<div className='d-flex justify-content-center align-items-center'> <div>waiting...</div></div>}>

    
  <HashRouter>
  <Routes>
    {["/",'h',"H","Home","home"].map((path,index)=>{
    return  <Route path={path} element={<Home/>} key={index}/>
    })}
    <Route path='/signin' element={<Signin/>}/> 
   
    <Route path='/signup' element={<SignUP/>}>
     
    </Route>
    <Route path='/signup/Doctor' element={<DoctorRegister/>} />
    <Route path='/signup/Patient' element={<PatiantRegister/>}/>
    {["/signup/Radiology","/signup/Lab","/signup/Pharmacy","/signup/Clinic"].map((path,index)=>{
    return  <Route path={path} element={<Ph_lab_xRayRegister/>} key={index}/>
    })}
 
   <Route path="/contactus" element={<ContactUs/>}/>
   <Route path='/Patiant/:id' element={<Patiant/>}></Route>
<Route path='/Patiant/:id/bloodPressure' element={<Blood_Pressure/>}/>

  <Route path='/:id/record' element={<Record/>}>
  <Route path='rosheta' element={<Rosheta/>}/>
  <Route path='tahalil' element={<Tahalil/>}/>
  <Route path='ashea' element={<
  Ashea/>}/>
  </Route>
  <Route path='/Patiant/:id/rosheta' element={<Rosheta/>}/>
    <Route path='/FindPatient' element={<FindPatient/>}/>
    <Route path='/required/:PatientId/:type' element={<RequierdScans_Prescriptions/>}></Route>
    <Route path='*' element={<Error/>}/> 
  </Routes>
  </HashRouter>
  
  </Suspense>
  );
}

export default App;
