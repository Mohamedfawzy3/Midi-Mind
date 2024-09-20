import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios';
import style from '../styles/rosheta.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import pdfimg from '../images/pdf.svg'
import { Link, useNavigate, useParams } from 'react-router-dom';
const Rosheta = () => {
    const [visition_info, setVisition_info] = useState({});
    let[msg_apper,setMsg_apper]=useState("")
    const{id}=useParams()
    const navigate=useNavigate()
    useEffect(() => {
      axios
        .get(`https://midimind.runasp.net/api/PatientsVisitClinics/${id}`)
        .then((res) => {
          console.log(res.data)
          setVisition_info(res.data);
        })
        .catch((err) => {
          setMsg_apper(err.response.data)
          console.log(err.response.data)});
    }, []);
    return (
      <>
       {Array.isArray(visition_info)?
        <div className={`${style.Box} d-flex gap-3 flex-wrap justify-content-between mt-3`}>
       
        { visition_info &&Array.isArray(visition_info)&&
          visition_info.map((el, index) => {
            return (
              <div className={`${style.box} p-2`} key={index}>
                <div className={`${style.download}`}>
                <FontAwesomeIcon icon={faDownload} />
                </div>
                <div className={`${style.image} text-center`} >
                  <Link to={el.prescription}>
                  <img src={pdfimg} alt='pdf'/>
                  </Link>
                 
                </div>
                <div className={`d-flex justify-content-between py-2 fs-6 ${style.footer}`}>
                  <span>{el.date}</span>
                  <span>5.5 MB</span>
                </div>
              </div>
            );
          })}


      </div>
        : msg_apper==""? <div className='text-center position-relative mt-5'>
        <div className="spinner-border text-primary text-center d-block position-absolute start-50 " role="status" style={{top:"-30px"}}>
       
    </div>
         <span >جارى تحميل البيانات....</span>
         </div>: <div>
        <p className='text-center fw-bold fs-5 mt-3'>{msg_apper}</p>
       </div> }
    
      </>
    );
};

export default Rosheta;