import React, { useState } from "react";
import { useParams } from "react-router-dom";
import style from "../styles/visitform.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const Visitform = () => {
  const { id } = useParams();
  let [rosheta_msg, setRosheta_msg] = useState(false);
  let [tests_msg,setTests_msg]=useState(false)
  let [xray_msg,setXray_msg]=useState(false)
  let[xray_btn_apperance,setXray_btn_apperance]=useState("")
  let[rosheta_btn_apperance,setRosheta_btn_apperance]=useState("")
  let[tests_btn_apperance,setTests_btn_apperance]=useState("")
  let [tahalil, setTahalil] = useState({ patientId: id });
  let [ashea, setAshea] = useState({ patientId: id });
  const RoshetaInForm = new FormData();
  const handle_ashea = (e) => {
    const { name, value } = e.target;
    setAshea((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(ashea);
  };
  const handle_tahalil = (e) => {
    const { name, value } = e.target;
    setTahalil((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(tahalil);
  };
  const handle_rosheta = (e) => {
    const value = e.target.files[0];

    // for (let key in rosheta) {
    //   if (rosheta.hasOwnProperty(key)) {
    //     formData.append(key, rosheta[key]);
    //   }
    // }
    RoshetaInForm.append("prescription", value);
    RoshetaInForm.append("report", value);
    RoshetaInForm.append("patientId", id);
    RoshetaInForm.append("clinicId", localStorage.getItem("Id"));
  };
  const save_tahalil = (e) => {
    setTests_btn_apperance("disabled")
    e.preventDefault();
    axios
      .post("https://midimind.runasp.net/api/RequierdTests", tahalil, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setTests_btn_apperance("")
      setTests_msg(true)
      })
      .catch((err) =>  setTests_btn_apperance(""));
  };
  const save_ashea = (e) => {
    e.preventDefault();
    setXray_btn_apperance("disabled")
    axios
      .post("https://midimind.runasp.net/api/RequierdScans", ashea, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setXray_btn_apperance("")
        setXray_msg(true)
      })
      .catch((err) =>setXray_btn_apperance(""));
  };

  const save_rosheta = (e) => {
    setRosheta_btn_apperance("disabled")
    e.preventDefault();
    axios
      .post("https://midimind.runasp.net/api/PatientsVisitClinics", RoshetaInForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        setRosheta_btn_apperance("")
       setRosheta_msg(true)
      })
      .catch((err) => {
        console.log(err)
        setRosheta_btn_apperance("")});
  };
  return (
   
    <div>
      <button
        type="button"
        className={`${style.model_btn}`}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            {/* <div class="modal-header">
       <button type="button" class="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
         <h1 class="modal-title fs-5" id="exampleModalLabel">Add visitation</h1>
        
       </div> */}
            <div class="modal-body">
              {/* visit form */}

              <div
                className={`text-center rounded-3 p-3 mb-3 ${style.visit_box}`}
              >
                <form action="" onSubmit={save_rosheta} className="text-center">
                  <h4 className="text-center">Rosheta</h4>
                  <div class="mb-3">
                    <input
                      type="file"
                      name="presciriptions"
                      class="form-control"
                      id="Rosheta"
                      required
                      onChange={handle_rosheta}
                      onFocus={()=>setRosheta_msg(false)}
                    />
                  </div>
                  {rosheta_msg? (
                <div class="alert alert-success fw-bolder text-center mb-2" role="alert">
                 successfully
                </div>
              ) : null
              
            }
                  <button className={`${rosheta_btn_apperance} btn btn-primary btn-sm`}>Add</button>
                </form>
               
              </div>
              {/* Ahsea form */}
              <div
                className={`text-center rounded-3 p-3 mb-3 ${style.visit_box}`}
              >
                <form action="" onSubmit={save_ashea}>
                  <h4 className="text-center">Radiology</h4>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="Ashea"
                      name="name"
                      required
                      placeholder="Enter the RADIOLOGY name"
                      onChange={handle_ashea}
                      onFocus={()=>setXray_msg(false)}
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="Ashea note"
                      placeholder="Type any note here"
                      name="note"
                      onChange={handle_ashea}
                    />
                  </div>
                  {xray_msg? (
                <div class="alert alert-success fw-bold text-center mb-2" role="alert">
                 successfully
                </div>
              ) : null
              
            }
                  <button className={`${xray_btn_apperance} btn btn-primary btn-sm`}>Add</button>
                </form>
               
              </div>
              {/* Tahalil form */}
              <div className={`text-center rounded-3 p-3 ${style.visit_box}`}>
                <form action="" onSubmit={save_tahalil}>
                  <h4 className="text-center">Tests</h4>
                  <div class="mb-3">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="tests"
                      required
                      placeholder="Enter reqired TESTS here"
                      onChange={handle_tahalil}
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      name="note"
                      class="form-control"
                      placeholder="Type any note here"
                      id="tests-note"
                      onChange={handle_tahalil}
                      onFocus={()=>setTests_msg(false)}
                    />
                  </div>
                  {tests_msg? (
                <div class="alert alert-success fw-bolder text-center mb-2" role="alert">
                 successfully
                </div>
              ) : null
              
            }
                  <button className={`${tests_btn_apperance} btn btn-primary btn-sm`}>Add</button>
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
