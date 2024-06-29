import React from "react";
import style from "../../styles/sign.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Alert } from "bootstrap";
const Users = () => {
  let [user_info, setUser_info] = useState({});
  const [logo, setLogo] = useState();
  const [message, setMessage] = useState("");
  const [Button_display, setButton_display] = useState("");
  const navigat = useNavigate();
  const [hash] = useState(window.location.hash.split("/"));
  const [role, setUserType] = useState(hash[hash.length - 1]);

  let formData = new FormData();

  const HandleSumbit = (e) => {
    const { name, value } = e.target;
    setUser_info((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(user_info);
  };
  const getLogo = (e) => {
    setLogo(e.target.files[0]);
  };
  const user_info_form = () => {
    for (let key in user_info) {
      if (user_info.hasOwnProperty(key)) {
        formData.append(key, user_info[key]);
      }
    }
    formData.append("logo", logo);
    return formData;
  };
  let creat_user = (e) => {
    e.preventDefault();
    setButton_display("disabled");
    user_info_form();

    axios
      .post(
        role == "Lab"
          ? "https://localhost:7189/api/Lab/AddLab"
          : role == "Pharmacy"
          ? "https://localhost:7189/api/Pharmacy/AddPharmacy"
          : role == "Radiology"
          ? "https://localhost:7189/api/Radiology/AddRadiology"
          : role == "Clinic"
          ? "https://localhost:7189/api/Clinic/addClinic"
          : null,
        formData,
        {
          headers: {
            token: localStorage.getItem("token"),
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("Id",res.data.labId||res.data.clinicId||res.data.pharmacyId||res.data.radiologyId)
        setTimeout(() => {
          navigat("/home");
        }, 3000);
      })
      .catch((err) => {
        setButton_display("");
      console.log(err)
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
            <form class="row g-3 col-md-10 mx-auto" onSubmit={creat_user}>
              {/* place name input */}
              <div class="col-md-6">
                <label for="validationDefault02" class="form-label">
                  اسم المنشأه
                </label>
                <input
                  type="text"
                  class={`form-control ${style.inputChange}`}
                  id="validationDefault02"
                  placeholder="برجاء ادخال اسم المكان او المنشأه"
                  required
                  name="name"
                  onChange={HandleSumbit}
                />
              </div>
              {/* manger name input */}
              <div class="col-md-6">
                <label for="validationDefault01" class="form-label">
                  الاسم
                </label>
                <input
                  type="text"
                  class={`form-control ${style.inputChange}`}
                  placeholder="ادخل اسم المالك"
                  id="validationDefault01"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("برجاء ادخال اسم صحيح")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                  name="manager"
                  onChange={HandleSumbit}
                />
              </div>
              {/* specilization input */}
              {role == "Lab" || role == "Radiology" || role=="Clinic"? (
                <div class="col-md-12">
                  <label for="specailization" class="form-label">
                    التخصص
                  </label>
                  <input
                    type="text"
                    class={`form-control ${style.inputChange}`}
                    placeholder="ادخل التخصص"
                    id="specailization"
                    onInvalid={(e) =>
                      e.target.setCustomValidity("برجاء ادخل التخصص")
                    }
                    onInput={(e) => e.target.setCustomValidity("")}
                    required
                    name="specailization"
                    onChange={HandleSumbit}
                  />
                </div>
              ) : null}
              {role=="Clinic"? <div class="col-12">
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
              </div>:null}
              {/* logo input */}
              <div className="col-12">
                <label for="logo" class="form-label">
                  الشعار
                </label>
                <input
                  type="file"
                  class={`form-control ${style.inputChange}`}
                  id="logo"
                  required
                  name="logo"
                  onChange={getLogo}
                />
              </div>
              {/* Display message */}
              {message != "" ? (
                <div class="alert alert-danger text-center" role="alert">
                  {message}
                </div>
              ) : null}
              {/* Submit button */}
              <div class="col-12  text-center">
                <button class={`${Button_display} btn btn-dark`} type="submit">
                  انشاء حساب
                </button>
              </div>

              {/* More regisration options */}
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

export default Users;
