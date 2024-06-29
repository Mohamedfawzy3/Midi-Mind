import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import bloodStyle from "../styles/BloodPressure.module.css"
import Navbar from './Navbar';
const Blood_Pressure = () => {
    const [blood_pressure,setBlood_pressure]=useState({})
    const [patiantId,setPatientId]=useState()
 const {id}=useParams()
 const [reload,setReload]=useState(0);
   let [blood_pressur_data,setBlood_pressur_data]=useState()
let [readingObject,setReadingObject]=useState({"patientId":id})
useEffect(()=>{
    get_blood_pressur_data()
},[reload])
const get_blood_pressur_data=()=>{
    axios.get(`https://localhost:7189/api/PatientBloodPressures/${id}`)
    .then(res=>{
        setBlood_pressure(res.data.reverse())
        
        
       })
    .catch(err=>console.log(err))
}
    const HandleSumbit=(e)=>{
        const{name,value}=e.target
setReadingObject((old)=>({
    
    ...old,[name]:value
}

))


    }
    let NewReading=(e)=>{
        e.preventDefault()
        axios.post("https://localhost:7189/api/PatientBloodPressures",readingObject)
        .then((res)=>setReload(res.data))
        
        .catch((err)=>console.log(err))
    }
    return (
        <div className={`${bloodStyle.blood_pressure}`}> 
<div className={`${bloodStyle.nav_height}`}>
<Navbar/>
</div>
<div className={` text-center px-2`}>
        <h3>Blood Pressures Reading </h3>
        <div className='d-flex gap-3'>
        {/* add new raeding */}
        <div className='col-12 col-sm-2 col-md-4 bg-white container rounded-3 py-3'>
            <h4>قراءه جديده</h4>
            <form action="" className='container mt-3' onSubmit={NewReading}>
           <div className=''>
           <div class="col-md-12">
                <input
                  type="text"
                  class={`form-control`}
                  id=""
                  placeholder="ضغط الدم الانقباضى "
                  required
                  name="systolicPressure"
                  onChange={HandleSumbit}
                />
              </div>
            -
              <div class="col-md-12">
               
                <input
                  type="text"
                  class={`form-control `}
                  placeholder="ضغط الدم الانبساطى"
                  id=""
                  onInvalid={(e) =>
                    e.target.setCustomValidity("برجاء ادخال اسم صحيح")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                  name="diastolicPressure"
                  onChange={HandleSumbit}
                />
              </div>
           </div>
              <div><button type='submit' className='btn btn-dark mt-4' >اضافه</button></div>
            </form>
        </div>
       
         <div className='container bg-white rounded-3'>
            
        <table class="table table-striped table-hover" style={{direction:"ltr",minWidth:"600px"}}>
<thead>
<tr className='text-center'>
<th>#</th>
<th>Reading</th>
<th>Date</th>
<th>Time</th>

</tr>
</thead>
<tbody>
{blood_pressure&&Array.isArray(blood_pressure)&&blood_pressure.map((el,index)=>{
return(
    <tr key={index} className='text-center'>
        <td>{index +1}</td>
        <td>{el.pressure}</td>
        <td>{el.date}</td>
        <td>{el.time}</td>
        
        
    </tr>
)
})}
</tbody>
</table>
    </div>
    </div>
    </div>
    </div>
      
    );
};

export default Blood_Pressure;