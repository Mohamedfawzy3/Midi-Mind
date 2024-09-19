import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Style from "../styles/sugar_pressures.module.css";
import Navbar from "./Navbar";
const Blood_Pressure = () => {
  const [reading_data, setReading_data] = useState({});

  const { id } = useParams();
  const { type } = useParams();
  const [reload, setReload] = useState(0);

  let [readingObject, setReadingObject] = useState({ patientId: id });
  useEffect(() => {
    get_record_reading();
  }, [reload]);
  const get_record_reading = () => {
    axios
      .get(`http://mohamedfawzy3-001-site1.atempurl.com/api/Patient${type}/${id}`)
      .then((res) => {
        setReading_data(res.data.reverse());
      })
      .catch((err) => console.log(err));
  };
  const HandleSumbit = (e) => {
    const { name, value } = e.target;
    setReadingObject((old) => ({
      ...old,
      [name]: value,
    }));
  };
  let NewReading = (e) => {
    e.preventDefault();
    axios
      .post(`http://mohamedfawzy3-001-site1.atempurl.com/api/Patient${type}`, readingObject)
      .then((res) => setReload(res.data))

      .catch((err) => console.log(err));
  };
  return (
    <div className={`${Style.pressures}`}>
      <div className={`${Style.nav_height}`}>
        <Navbar />
      </div>
      <div className={` text-center px-2`}>
        {type == "BloodPressures" ? (
          <h3>سجل قراءات ضغط الدم</h3>
        ) : (
          <h3>سجل قراءات مستوى السكر </h3>
        )}

        <div className="d-flex gap-3">
          {/* add new raeding */}
          <div className="col-12 col-sm-2 col-md-4 bg-white container rounded-3 py-3">
            <h4>قراءه جديده</h4>
            <form action="" className="container mt-3" onSubmit={NewReading}>
              <div className="">
                {type == "BloodSugers" ? (
                  <div class="col-md-12">
                    <input
                      type="text"
                      class={`form-control`}
                      id="bloodSugarLevel"
                      placeholder="ادخل قراءه السكر"
                      required
                      name="bloodSugarLevel"
                      onChange={HandleSumbit}
                    />
                  </div>
                ) : (
                  <>
                    <div class="col-md-12 mb-2">
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
                    </div>{" "}
                  </>
                )}
              </div>

              <div>
                <button type="submit" className="btn btn-dark mt-4">
                  اضافه
                </button>
              </div>
            </form>
          </div>

          <div className="container bg-white rounded-3 overflow-x-auto">
            <table
              class="table table-striped table-hover"
              style={{ direction: "ltr", minWidth: "600px" }}
            >
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>Reading</th>
                  <th>Date</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {reading_data &&
                  Array.isArray(reading_data) &&
                  reading_data.map((el, index) => {
                    return (
                      <tr key={index} className="text-center">
                        <td>{index + 1}</td>
                        <td>
                          {type == "BloodSugers"
                            ? el.bloodSugarLevel
                            : el.pressure}
                        </td>
                        <td>{el.date}</td>
                        <td>{el.time}</td>
                      </tr>
                    );
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
