import React, { useEffect, useState } from "react";
import { useParams,Link, Navigate, useNavigate, Outlet } from "react-router-dom";
import style from "../styles/Patiant.module.css";
import Navbar from "./Navbar";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faPhone,
  faAnglesRight,
  faTriangleExclamation,
  faPlus,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import Visitform from "./Visitform";
const Patiant = () => {
  let [reload, setReload] = useState();
  const [patient, setPatient] = useState({});
  const [patient_notes, setPatent_notes] = useState([]);
  const [note, setNote] = useState({});
  const [contact_info, setContact_info] = useState({});
  const [acttual_useType,setActtual_userType]=useState(localStorage.getItem("userType"))
  const navigate=useNavigate()
  const { id } = useParams();
  useEffect(() => {
    get_notes();
    getPatiantInfo();
  }, [reload]);
  const getPatiantInfo = () => {
    axios
      .get(`https://localhost:7189/api/Patient/id?id=${id}`)
      .then((res) => {
        setPatient(res.data);
        console.log(patient)
        
      })
      .catch((err) => console.log(err));
  };
  const get_notes = () => {
    axios
      .get(`https://localhost:7189/api/PatientNotes/${id}`)
      .then((res) => {
        setPatent_notes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handle_note = (e) => {
    setNote(e.target.value);
  };
  const postNote = (e) => {
    e.preventDefault()
    const NewNote = { "patientId": id, "note": note };
    axios
      .post("https://localhost:7189/api/PatientNotes", NewNote)
      .then((res) => {
        setReload(res.data)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 const navigat_button=()=>{
  console.log("jjj")
  if(acttual_useType=="Lab") navigate(`/required/${id}/Tests`) 
    else if (acttual_useType=="Radiology")navigate (`/required/${id}/Scans`)
  else if (acttual_useType=="Pharmacy")navigate(`rosheta`)
 }
  return (
    <>
    {/* todo box for navbar heigth */}
      <Navbar />
      <div className={`${style.info_page}`}>
        <div className="container">
          {/* patient info (personal // aditional) */}
          <div className="d-flex justify-content-between gap-2 flex-column flex-sm-row ">
           {/* Personal info */}
            <div
              className={`${style.main_info} d-flex flex-wrap col-12 col-sm-8 p-3 m-0`}
            >
              <p className="border-bottom text-center fw-bold pb-2 col-12">
                البيانات الاساسيه
              </p>
              <div className="col-12 pb-4">
                الاسم <br />
                <span className="fw-medium">{patient.name}</span>
              </div>
              <div className="col-3">
                <div>
                  العمر
                  <br /> <span>{patient.age}</span>
                </div>
                <div>
                  النوع
                  <br />
                  <span>{patient.gender}</span>
                </div>
                <div>
                  تاريخ الميلاد
                  <br />
                  <span>{patient.birthDate}</span>
                </div>
                <div>
                  فصيله الدم
                  <br />
                  <span>{patient.blood_type?patient.blood_type:"غير معروف"}</span>
                </div>
              </div>
              <div className="col-9">
                <div>
                  <FontAwesomeIcon icon={faPhone} />

                  <span className="me-2">{patient.user?.phoneNumber}</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className="me-2">
                    <a href={`mailto:${patient.user?.email}`}>
                      {patient.user?.email}
                    </a>
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHouse} />
                  <span className="me-2">
                    {patient.user?.governorate}-{patient.user?.city}-{patient.user?.street}
                  </span>
                </div>
              </div>
            </div>
            {/* edditonal info */}
            <div className={`${style.var_info} col-12 col-sm-4 p-3`}>
              <p className="text-center fw-bold pb-2 border-bottom">
                معلومات اخرى
              </p>
              <div style={{ direction: "ltr" }} className="mb-3">
                <img
                  src={require("../images/blood-presure3.png")}
                  alt="blood_presusre_icon"
                  style={{ width: "30px" }}
                />
                <span className="ms-2">120/80 mm</span>
                <Link to='bloodPressure'><FontAwesomeIcon icon={faPenToSquare} /></Link>
              </div>
              <div style={{ direction: "ltr" }} className="mb-3">
                <img
                  src={require("../images/height.png")}
                  alt="height_icon"
                  style={{ width: "30px" }}
                />
                <span className="ms-2">165 cm</span>
                <Link to='bloodPressure'><FontAwesomeIcon icon={faPenToSquare} /></Link>
              </div>
              <div style={{ direction: "ltr" }} className="mb-3">
                <img
                  src={require("../images/weight.png")}
                  alt="weight_icon"
                  style={{ width: "30px" }}
                />
                <span className="ms-2">70 kg</span>
                <Link to='bloodPressure'><FontAwesomeIcon icon={faPenToSquare} /></Link>
              </div>
            </div>
          </div >
         {/* Go ro record Button */}
         {acttual_useType=="Clinic"?  <div className="text-center"> 
         <button className={`${style.record_btn} btn btn-dark mt-3`} onClick={()=>navigate(`/${id}/record/rosheta`)}>
           Go to record
        </button>
         </div>:null}
       
          {/* Create the section of the important info about patiant  */}
          <section className="mt-5 bg-white rounded-4">
            <h2 className="text-center py-4 ">ملاحظات هامه</h2>
            <div className="d-flex flex-column-reverse flex-sm-row">
              {/*display Patient note */}
              <div
                className={`${style.important_info} container d-flex flex-wrap flex-column flex-sm-row mb-3`}
              >
                {patient_notes.length==0?<div className={`${style.no_note_yet}`}>There are no notes untill now</div>:null}
                {patient_notes.map((note_object, index) => {
                  return (
                    <div key={index} className={`${style.note_card}`}>
                      <div className="" style={{direction:"ltr"}}>{note_object.note}</div>
                    </div>
                  );
                })}
              </div>
              {/* Add new note */}
              <div className={`${style.new_note} col-12 col-sm-3`}>
              <h3 className="text-center">اضافه ملاحظه</h3>
                <p></p>
                <div>
                  <form action="" onSubmit={postNote}>
                  <textarea
                  required
                    className="col-12 p-2 rounded-2 "
                    name="note"
                    id=""
                    rows={3}
                    onChange={handle_note}
                    placeholder="Type a new note in english"
                  ></textarea>
                  <button
                    type="submit"
                    className="btn btn-dark"
                   
                  >
                    Add Note
                  </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* Visitation model */}
          {acttual_useType=="Clinic"?<><Visitform />
           
          </>:null}
          {/* Labs&Radiologies&Pharmacy */}
       {acttual_useType=="Lab"||acttual_useType=="Radiology"||acttual_useType=="Pharmacy"? <button className={`${style.nextButton}`} onClick={navigat_button}>
        <FontAwesomeIcon icon={faPlus} />
        </button>:null}

        </div>
      </div>
      
    </>
  );
};

export default Patiant;
