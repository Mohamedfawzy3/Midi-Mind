import React, { useState } from "react";
import style from "../../styles/sign.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Patient = () => {
  let [user_info, setUser_info] = useState();
  const [message, setMessage] = useState("");
  const [Button_display, setButton_display] = useState("");
  const [image, setImage] = useState();
  const navigate = useNavigate();
  const [hash] = useState(window.location.hash.split("/"));
  const [userType, setUserType] = useState(hash[hash.length - 1]);
  const formData = new FormData();
  const token = localStorage.getItem("token");
  // get data form inputs and conect it with his each name
  const HandleSumbit = (e) => {
    const { name, value } = e.target;
    setUser_info((old) => ({
      ...old,
      [name]: value,
    }));
  };
  // get image value from input
  let get_Image = (e) => {
    setImage(e.target.files[0]);
    user_info_form();
  };
  // convert the data in the shape of form
  const user_info_form = () => {
    for (let key in user_info) {
      if (user_info.hasOwnProperty(key)) {
        formData.append(key, user_info[key]);
      }
    }
    formData.append("image", image);

    return formData;
  };

  // handle Submtion with 14 number ssn
  const sumbtion_data = (e) => {
    e.preventDefault();
    if (user_info.ssn.length !== 14) {
      setMessage("الرقم القومى يجب ان يكون 14 رقم");
    } else {
      creat_user();
    }
  };
  // <## post new user ##>
  let creat_user = (e) => {
    
    setButton_display("disabled");
    user_info_form();
    axios
      .post("https://midimind.runasp.net/api/Patient/AddPatient", formData, {
        headers: {
          token: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        localStorage.setItem("Id", res.data.patientId);
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      })
      .catch((err) => {
        setButton_display("");
        setMessage(err.response.data);
      });
  };
  return (
    <div>
      <div className={`${style.body}`}>
        <div className={`container p-4`}>
          <div
            className={`${style.foir} container col-lg-8 col-sm-12 py-3 bg-white rounded-4 `}
          >
            <h2 className="text-center mb-4">انشاء حساب</h2>
            <div className={`text-center`}>
              <span></span>
              <span></span>
            </div>
            <form class="row g-3 col-md-10 mx-auto" onSubmit={sumbtion_data}>
              {/* name input */}
              <div class="col-md-6">
                <label for="validationDefault01" class="form-label">
                  الاسم
                </label>
                <input
                  type="text"
                  class={`form-control ${style.inputChange}`}
                  placeholder="ادخل الاسم كاملا"
                  id="validationDefault01"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("برجاء ادخال اسم صحيح")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                  name="name"
                  onChange={HandleSumbit}
                />
              </div>
              {/* SSN input */}
              <div class="col-md-6">
                <label for="id" class="form-label">
                  الرقم القومى
                </label>
                <input
                  type="number"
                  class={`form-control ${style.inputChange}`}
                  id="id"
                  placeholder="ادخل 14 رقم"
                  required
                  name="ssn"
                  onChange={HandleSumbit}
                />
              </div>
              {/* Birth date input */}
              <div className="col-12">
                <label for="date" class="form-label">
                  تاريخ الميلاد
                </label>
                <input
                  className={`form-control ${style.inputChange}`}
                  type="date"
                  name="birthDate"
                  id="date"
                  onChange={HandleSumbit}
                />
              </div>
              {/* Acount image  */}
              <div className="col-12">
                <label for="imge" class="form-label">
                  الصوره
                </label>
                <input
                  type="file"
                  class={`form-control ${style.inputChange}`}
                  id="imge"
                  required
                  name="imge"
                  onChange={get_Image}
                />
              </div>
              {/* Gender input */}
              <div class="col-md-12">
                <label for="gender" class="form-label d-block">
                  النوع
                </label>
                <div class={`${style.users}`}>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    id="gender1"
                    value="ذكر"
                    onChange={HandleSumbit}
                  />
                  <label class="form-check-label me-1" for="gender1">
                    ذكر
                  </label>
                </div>
                <div class={` ${style.users}`}>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    value="انثى"
                    id="gender2"
                    onChange={HandleSumbit}
                  />
                  <label class="form-check-label me-1" for="gender2">
                    انثى
                  </label>
                </div>
              </div>
              {/* Display error mesage */}
              {message != "" ? (
                <div class="alert alert-danger text-center" role="alert">
                  {message}
                </div>
              ) : null}
              {/* Submit Button */}
              <div class="col-12  text-center">
                <button class={`${Button_display} btn btn-dark`} type="submit">
                  انشاء حساب
                </button>
              </div>
              {/* More options for regestration */}
              <div className="text-center">
                لديك حساب بالفعل؟{" "}
                <span>
                  <Link to="/signin">تسجيل الدخول</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
