import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faFlask,
  faStaffSnake,
  faUserDoctor,
  faRadiation,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import style from "../styles/Home.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
const Home = () => {
  let navigate = useNavigate();
  const [token,SetToken]=useState(localStorage.getItem("token"))
  const [userType]=useState(localStorage.getItem("userType"))
 const handle_startNow_button=()=>{
  if(userType=="Clinic"||userType=="Doctor"||userType=="Lab"||userType=="Pharmacy"||userType=="Radiology")
    navigate('/FindPatient')
  else if(userType=="patient"){
    navigate(`/Patiant/${localStorage.getItem("Id")}`)
    console.log("fffff")
  }
   
 }
 
  return (
    <div className={`${style.body_content}`}>
      
      <Navbar />
      <div className={`${style.Box}`}>
        
        <div className={`${style.box} container `}>
          <div
            className={`col-12 text-center text-sm-end col-sm-7 flex-left ${style.homeContent}`}
          >
            <div>صحتك بالدنيا</div>
            <p>
              علشان كده وفرنا عليك دوشة الورق الكتير دلوقتى كل بياناتك فى جيبك
              تقدر توصلها فى اى وقت وتشاركها مع طبيبك وأماكن أخرى
            </p>
            <div>
              
              <button
                className={`${style.start_button}`}
                onClick={handle_startNow_button}
              >
                
                ابدأ الأن
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.info}`}>
        
        <div className="container py-5 d-flex justify-content-between flex-column flex-sm-row">
          
          <div className="text-center mb-5 m-sm-2 ">
            <span className="fs-1 fw-bold">
              <img src={require("../images/RR.jpg")} alt="Thinking_img" />
            </span>
            <h3>طبيب</h3>
          </div>
          <div className="text-center mb-5 m-sm-2 ">
            <span className="fs-1 fw-bold">
              <img src={require("../images/SS.jpg")} alt="Thinking_img" />
            </span>
            <h3>صيدلية</h3>
          </div>
          <div className="text-center mb-5 m-sm-2 ">
            <span className="fs-1 fw-bold">
              <img src={require("../images/TT.jpg")} alt="Thinking_img" />
            </span>
            <h3>معمل تحليل</h3>
          </div>
          <div className="text-center ">
            <span className="fs-1 fw-bold">
              <img src={require("../images/XX.jpg")} alt="Thinking_img" />
            </span>
            <h3>معمل اشعة</h3>
          </div>
        </div>
      </div>
      <section className={`${style.members} container py-4`}>
        <h2 className="text-center mb-5 fs-1 fw-bold">المحتوي</h2>
        <div
          className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}
        >
          <div className={`${style.image} col-2 col-lg-1 mb-3`}>
            
            <img src={require("../images/DD.jpg")} alt="Thinking_img" />
          </div>
          <div>
            
            <h3 className={style.kind}>الطبيب</h3>
            <div className={`${style.text} fs-5`}>
              الطبيب يقدر يطلع على ملفك الطبى ومن خلالة يقدر المعلومات الضرورية
              قبل اى تشخيص ومن ثم الحصول على تشخيص سليم ويقدر يضيفلك التحاليل
              والاشاعات المطلوبة وكمان يكتبلك روشتة الكترونية
            </div>
          </div>
        </div>
        <div
          className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}
        >
          <div className={`${style.image} col-2 col-lg-1 mb-3`}>
            
            <img src={require("../images/LL.jpg")} alt="Thinking_img" />
          </div>
          <div>
            
            <h3 className={style.kind}>الصيدلية</h3>
            <div className={`${style.text} fs-5`}>
              دلوقتى الصيدلية تقدر تتطلع على حسابك وتشوف العلاج المطلوب و تصرفة
              لك بكل سهولة وبدون أخطاء وكمان تقدر تتابع قياس الضغط والسكر وغيرة
              وتضيف البيانات دى لحسابك
            </div>
          </div>
        </div>
        <div
          className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}
        >
          <div className={`${style.image} col-2 col-lg-1 mb-3`}>
            
            <img src={require("../images/PP.jpg")} alt="Thinking_img" />
          </div>
          <div>
            
            <h3 className={style.kind}>معمل التحليل</h3>
            <div className={`${style.text} fs-5`}>
              يقدر يطلع على التحاليل والفحوصات الموجودة فى ملفك والمطلوب إجرائها
              ومن ثم رفعها علي ملفك الطبى ويقدر طبيبك يطلع عليها
            </div>
          </div>
        </div>
        <div
          className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}
        >
          <div className={`${style.image} col-2 col-lg-1 mb-3`}>
            
            <img src={require("../images/qw.jpg")} alt="Thinking_img" />
          </div>
          <div>
            
            <h3 className={style.kind}>معمل الاشعة</h3>
            <div className={`${style.text} fs-5`}>
              معمل الاشعة يقدر يشوف الفحوصات المطلوبة فى ملفك الطبى وبمجرد
              الانتهاء منها يتم رفع نتائج الفحوصات إلى ملفك مباشرة لتكون جاهزة
              للإطلع عليها من قبل طبيبك.
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.why_us} `}>
        <h2 className="text-center mb-5 fs-1 fw-bold">لماذا نحن</h2>
        <div className=" d-flex flex-column-reverse flex-md-row">
          <div className={`${style.text} col-12 col-sm-6 p-4`}>
            <ul>
              <li className="mb-3  fs-5 fw-medium">
                
                <FontAwesomeIcon
                  className="text-success ms-1"
                  icon={faCheck}
                />
                بياناتك كلها فى مكان واحد
              </li>
              <li className="mb-3  fs-5 fw-medium">
                
                <FontAwesomeIcon
                  className="text-success ms-1"
                  icon={faCheck}
                />
                توفير الوقت والجهد
              </li>
              <li className="mb-3  fs-5 fw-medium">
                
                <FontAwesomeIcon
                  className="text-success ms-1"
                  icon={faCheck}
                />
                تحسين تجربة المريض
              </li>
              <li className="mb-3  fs-5 fw-medium">
                
                <FontAwesomeIcon
                  className="text-success ms-1"
                  icon={faCheck}
                />
                تحسين جودة الرعاية
              </li>
              <li className="mb-3  fs-5 fw-medium">
                
                <FontAwesomeIcon
                  className="text-success ms-1"
                  icon={faCheck}
                />
                الحد من اخطاء الروشتة الورقية
              </li>
            </ul>
          </div>
          <div className={`${style.image} col-12 col-sm-6`}>
            <img src={require("../images/pg25.jpg")} alt="Thinking_img" />
            <img src={require("../images/doctor.jpeg")} alt="Thinking_img" />
            <img src={require("../images/contact.jpg")} alt="Thinking_img" />
            <img src={require("../images/for.jpg")} alt="Thinking_img" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
