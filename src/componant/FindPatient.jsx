import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FindPatient = () => {
  const [patient_ssn, setPatien_ssn] = useState();
  let [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const [userType] = useState(localStorage.getItem("userType")) 
 
  useEffect(() => {}, []);
  const chech_Patient_account = () => {
    axios
      .get(`https://localhost:7189/api/Patient/ssn?ssn=${patient_ssn}`)
      .then((res) => {
        console.log(res)
        
        handle_navigate(res.data.patientId)
      })
      .catch((err) => setMsg(err.response.data));
  };
  const handle_navigate=(patientId)=>{
    navigate(`/Patiant/${patientId}`)
    // console.log(userType)
    // if(userType=="Clinic"){
    //   navigate(`/Patiant/${patientId}`)
    //   console.log("clinic")
    // }
        
    //       else if (userType == "Lab")
    //         navigate(`/required/${patientId}/Tests`)
    //       else if(userType == "Radiology") 
         
    //      navigate(`/required/${patientId}/Scans`)
    //      else if(userType == "Pharmacy") 
         
    //        navigate(`/${patientId}/record/rosheta`)
           
  }
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="text-center">
        <input
          type="text"
          onChange={(e) => {
            setPatien_ssn(e.target.value);
          }}
        />
        <br />
         {/* Display error mesage */}
         {msg!= "" ? (
                <div class="alert alert-danger text-center mt-4" role="alert">
                  {msg}
                </div>
              ) : null}
        <button className="btn btn-primary m-3" onClick={chech_Patient_account}>
          Search
        </button>
      </div>
    </div>
  );
};

export default FindPatient;
