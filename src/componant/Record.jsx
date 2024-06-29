
import { useState } from "react";
import style from "../styles/record.module.css";
import Navbar from "./Navbar";
import Visitform from "./Visitform";
import Rosheta from "./Rosheta";
import { Link, Outlet } from "react-router-dom";
const Record = () => {
const [flag,setFlag]=useState(true)
  return (
    <>
   <div>
   <Navbar/>
   </div>
   {/* record section */}
    <section className={`${style.record} pt-5`}>
      <div className=" py-4">
        <h3 className="text-center py-3 fw-bold fs-2">السجل الطبى</h3>
        <div className={`d-flex gap-2 ${style.content_Box } `}>
<div className={`${style.side_bar} p-2 bg-white text-center`}>
    <ul className="p-0">
    <li >
  <Link className={`fw-medium p-1`} to="rosheta">الزيارات</Link>
 
</li>
<li >
<Link className={`fw-medium p-1`} to="tahalil">التحاليل</Link>
 
</li>
<li >
<Link className={`fw-medium p-1`} to="ashea">الاشعة</Link>
</li>
    </ul>
</div>
<div className="container ms-2 bg-white rounded-3 overflow-x-auto">
<Outlet/>
  
  
  </div>
        </div>
       
      </div>
        {/* Visitation model */}
        <div className="container float-end">
        {localStorage.getItem("userType")=="Clinic"?<Visitform />:null}
        </div>
    </section>
    </>
  );
};

export default Record;
