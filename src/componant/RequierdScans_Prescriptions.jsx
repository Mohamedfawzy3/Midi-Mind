import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "../styles/Required.module.css";
import Navbar from "./Navbar";

const RequierdScans_Prescriptions = () => {
  let { type, PatientId } = useParams();
  let [requiredData, setRequiredData] = useState([]);
  const [reload, setReload] = useState("");
const [msg,setMsg]=useState("");
  useEffect(() => {
    Get_required();
  }, [reload]);

  const Get_required = () => {
    axios
      .get(`https://midimind.runasp.net/api/Requierd${type}/${PatientId}`)
      .then((res) => setRequiredData(res.data))
      .catch((err) => {
        setMsg(err.response.data)
        console.log(err.response.data)});
  };

  const upload = (e, id, name) => {
    let formData = new FormData();
    formData.append(
      localStorage.getItem("userType") === "Lab" ? "Test" : "Xray",
      e.target.files[0]
    );
    formData.append("patientId", PatientId);
    formData.append(
      `${localStorage.getItem("userType")}Id`,
      localStorage.getItem("Id")
    );
    formData.append("name", name);
    axios
      .post(
        type === "Scans"
          ? `https://midimind.runasp.net/api/visitRadiology`
          : type === "Tests"
          ? "https://midimind.runasp.net/api/visitLab"
          : null,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
       console.log(res.data)
        Delete_required(id,res.data);
      })
      .catch((err) => console.log(err.response));
  };

  const Delete_required = (id,change) => {
    axios
      .delete(
        type === "Scans"
          ? `https://midimind.runasp.net/api/RequierdScans/${id}`
          : type === "Tests"
          ? `https://midimind.runasp.net/api/RequierdTests/${id}`
          : null
      )
      .then((res) => {
        
        setReload(change);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={`${style.content} `}>
      <div className={`${style.navbar_height}`}>
        <Navbar />
      </div>
      <div className="container">
        {requiredData && requiredData.length > 0 ? (
          <div>
            <table
              className="table table-striped table-hover"
              style={{ direction: "ltr" }}
            >
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>name</th>
                  <th>Date</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {requiredData.map((el, index) => {
                  return (
                    <tr key={index} className="text-center">
                      <td>{index + 1}</td>
                      <td>{el.name}</td>
                      <td>{el.date}</td>
                      <td>
                        <div>
                          <input
                            type="file"
                            name="File"
                            id={`choose_file_${index}`}
                            className="d-none"
                            onChange={(e) => upload(e, el.id, el.name)}
                          />
                          <label
                            className="btn btn-success btn-sm text-white"
                            htmlFor={`choose_file_${index}`}
                          >
                            upload
                          </label>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : msg==""?(
          <div className="text-center position-relative mt-5">
            <div
              className="spinner-border text-primary text-center d-block position-absolute start-50 "
              role="status"
              style={{ top: "-30px" }}
            ></div>
            <span>جارى تحميل البيانات....</span>
          </div>
        ):<div>
        <p className='text-center fw-bold fs-5 mt-3'>{msg}</p>
       </div>}
        
      </div>
    </div>
  );
};

export default RequierdScans_Prescriptions;
