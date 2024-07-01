import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import style from "../styles/ashea.module.css";
import { Link, useParams } from "react-router-dom";
const Ashea = () => {
  const { id } = useParams();
  const [ashea, setAshea] = useState();
  let [msg_apper, setMsg_apper] = useState("");
  useEffect(() => {
    axios
      .get(`https://localhost:7189/api/visitRadiology/${id}`)
      .then((res) => {
        setAshea(res.data);
      })
      .catch((err) => {
        setMsg_apper(err.response.data);
        console.log(err);
      });
  }, []);
  return (
    <>
      {Array.isArray(ashea) ? (
        <div className={`${style.ashea}`}>
          {" "}
          <table
            class="table table-striped table-hover"
            style={{ direction: "ltr", minWidth: "600px" }}
          >
            <thead>
              <tr className="text-center">
                <th>#</th>
                <th>name</th>
                <th>Date</th>

                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {ashea &&
                Array.isArray(ashea) &&
                ashea.map((el, index) => {
                  return (
                    <tr key={index} className="text-center">
                      <td>{index + 1}</td>
                      <td>{el.name}</td>
                      <td>{el.date}</td>
                      <td>
                        <Link to={el.xray}>result</Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      ) : msg_apper == "" ? (
        <div className="text-center position-relative mt-5">
          <div
            className="spinner-border text-primary text-center d-block position-absolute start-50 "
            role="status"
            style={{ top: "-30px" }}
          ></div>
          <span>جارى تحميل البيانات....</span>
        </div>
      ) : (
        <div>
          <p className="text-center fw-bold fs-5 mt-3">{msg_apper}</p>
        </div>
      )}
    </>
  );
};

export default Ashea;
