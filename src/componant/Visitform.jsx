import React, {useState} from "react";
import { useParams } from "react-router-dom";
import style from "../styles/visitform.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const Visitform = () => {

  const {id}=useParams();
let[rosheta,setRosheta]=useState({})
  let [tahalil,setTahalil]=useState({"patientId":id})
  let[ashea,setAshea]=useState({"patientId":id})
  const RoshetaInForm=new FormData();
  const handle_ashea=(e)=>{

    const {name,value}=e.target
    setAshea((old)=>({
      ...old,
      [name]:value
    }))
    console.log(ashea)
    }
    const handle_tahalil=(e)=>{

      const {name,value}=e.target
      setTahalil((old)=>({
        ...old,
        [name]:value
      }))
      console.log(tahalil)
      }
      const handle_rosheta=(e)=>{

        const value=e.target.files[0]
        
        
        // for (let key in rosheta) {
        //   if (rosheta.hasOwnProperty(key)) {
        //     formData.append(key, rosheta[key]);
        //   }
        // }
        RoshetaInForm.append("prescription",value)
        RoshetaInForm.append("report",value)
        RoshetaInForm.append("patientId",id)
       RoshetaInForm.append("clinicId" ,localStorage.getItem("Id"))
   console.log(RoshetaInForm)
        }
    const save_tahalil=(e)=>{
      e.preventDefault();
      axios.post("https://localhost:7189/api/RequierdTests",tahalil,{headers:{
        token:localStorage.getItem("token")
      }})
      .then((res)=>{console.log(res)})
      .catch((err)=>console.log(err))
    }
    const save_ashea=(e)=>{
      e.preventDefault();
      axios.post("https://localhost:7189/api/RequierdScans",ashea,{headers:{
        token:localStorage.getItem("token")
      }})
      .then((res)=>{console.log(res)})
      .catch((err)=>console.log(err))
    }
    
    const save_rosheta=(e)=>{
      e.preventDefault();
      axios.post("https://localhost:7189/api/PatientsVisitClinics", RoshetaInForm,{headers:{
        "Content-Type": "multipart/form-data",
      }})
      .then((res)=>{console.log(res)})
      .catch((err)=>console.log(err))
    }
  return (
    // <div className={`${style.visit_info} container py-4 radius-3`}>
    //   <h3 className="text-center fw-bold">إضافة زيارة</h3>
    //   <form action=""  className="col-12 col-sm-10 col-md-10  container ">
    //     <div className="py-3">
    //       <form action="">
    //         <div className="">
    //           <div className="mb-3">
    //             <div className="mb-1">
    //               {" "}
    //               <label htmlFor="medicine-name">اسم الدواء</label>
    //             </div>
    //             <input
    //               className="w-100"
    //               type="text"
    //               id="medicine-name"
    //               placeholder="ادخل اسم الدواء"
    //             />
    //           </div>
    //           <div>
    //             <div className="mb-1">
    //               {" "}
    //               <label htmlFor="description">الوصف</label>
    //             </div>
    //             <input
    //               className="w-100"
    //               type="text"
    //               id="description"
    //               placeholder="ادخل الجرعة ومواعيد التناول"
    //             />
    //           </div>
    //         </div>
    //         <div className="text-center">
    //           {" "}
    //           <button type="submit" className="btn btn-dark btn-sm mt-3">
    //             إضافة
    //           </button>
    //         </div>
    //       </form>
    //     </div>

    //     <div className="py-3 ">
    //       <form action="">
    //         <div>
    //           <div className="mb-1">
    //             {" "}
    //             <label htmlFor="tahlil">التحاليل</label>
    //           </div>
    //           <input
    //             className="w-100"
    //             type="text"
    //             id="tahlil"
    //             placeholder="ادخل التحاليل المطلوبة"
    //           />
    //         </div>
    //         <div className="text-center">
    //           {" "}
    //           <button type="submit" className="btn btn-dark btn-sm mt-3">
    //           إضافة
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //     <div className="py-3 ">
    //       <form action="">
    //         <div>
    //           <div className="mb-1">
    //             <label htmlFor="ashea">الاشعة</label>
    //           </div>
    //           <input
    //             className="w-100"
    //             type="text"
    //             id="ashea"
    //             placeholder="أدخل الاشعة المطلوبة"
    //           />
    //         </div>
    //         <button type="submit" className="btn btn-dark btn-sm mt-3">
    //         إضافة
    //         </button>
    //       </form>
    //     </div>
    //     <div>
    //       <form action="">
    //         <div>
    //           <label htmlFor="text-area"> التقرير</label>
    //         </div>
    //         <textarea
    //           name=""
    //           id="text-area"
    //           cols="30"
    //           rows="7"
    //           className="w-100 "
    //         ></textarea>
    //       </form>
    //     </div>

    //     <div className="text-center">
    //       {" "}
    //       <button type="submit" className="btn btn-success ">
    //         حفظ
    //       </button>
    //     </div>
    //   </form>
    // </div>
    <div >
      
<button type="button" className={`${style.model_btn}`} data-bs-toggle="modal" data-bs-target="#exampleModal">
 <span><FontAwesomeIcon icon={faPlus} /></span>
 </button>
 
 
 <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog modal-dialog-centered">
     <div class="modal-content">
       {/* <div class="modal-header">
       <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
         <h1 class="modal-title fs-5" id="exampleModalLabel">Add visitation</h1>
        
       </div> */}
       <div class="modal-body">
        {/* visit form */}
  
<div className={`text-center rounded-3 p-3 mb-3 ${style.visit_box}`}>
<form action="" onSubmit={save_rosheta} className="text-center">
    <h4 className="text-center">Rosheta</h4>
<div class="mb-3">
<input type="file" name="presciriptions" class="form-control" id="Rosheta" required onChange={handle_rosheta}/>
</div>
<button className="btn btn-primary btn-sm" >Add</button>
</form>
</div>
{/* Ahsea form */}
  <div className={`text-center rounded-3 p-3 mb-3 ${style.visit_box}`}>
    <form action="" onSubmit={save_ashea}>
    <h4 className="text-center">Radiology</h4>
<div class="mb-3">
  <input type="text" class="form-control" id="Ashea" name="name" required placeholder="Enter the RADIOLOGY name" onChange={handle_ashea}/>
</div>
<div class="mb-3">
<input type="text" class="form-control" id="Ashea note" placeholder="Type any note here" name="note" onChange={handle_ashea}/>
 
</div>
<button className="btn btn-primary btn-sm" >Add</button>
</form>
</div>
{/* Tahalil form */}
  <div className={`text-center rounded-3 p-3 ${style.visit_box}`}>
    <form action="" onSubmit={save_tahalil}>
    <h4 className="text-center">Tests</h4>
<div class="mb-3">
  <input type="text" name="name" class="form-control" id="tests" required placeholder="Enter reqired TESTS here" onChange={handle_tahalil}/>
</div>
<div class="mb-3">
<input type="text" name="note" class="form-control" placeholder="Type any note here" id="tests-note" onChange={handle_tahalil} />
 
</div>
<button className="btn btn-primary btn-sm">Add</button>
</form>
</div>


       
       
     
       </div>
       {/* <div class="modal-footer">
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" class="btn btn-primary">Save changes</button>
       </div> */}
     </div>
   </div>
 </div>
</div>
  );
};

export default Visitform;
