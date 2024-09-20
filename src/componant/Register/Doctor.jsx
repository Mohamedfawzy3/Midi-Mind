import React, { useState } from "react";
import style from "../../styles/sign.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Doctor = () => {
  let [user_info, setUser_info] = useState({});
  let [image, setImage] = useState();
  let [message, setMessage] = useState("");
  const [Button_display,setButton_display]=useState("")
  const navigate = useNavigate();
  // handle input and his value
  const HandleSumbit = (e) => {
    const { name, value } = e.target;
    setUser_info((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(user_info);
  };
  const HandleImage = (e) => {
    setImage(e.target.files[0]);
  };
  // handle Submtion with 14 number ssn
 const sumbtion_data=(e)=>{
  e.preventDefault();
  if(user_info.ssn.length!==14){
    setMessage("الرقم القومى يجب ان يكون 14 رقم")
  }else{
    creat_user()
  }
 }
  
  // creat function to handle sending data
  let creat_user = () => {
   
    setButton_display("disabled")
    
    const token = localStorage.getItem("token");
    let Data = new FormData();
    for (let key in user_info) {
      if (user_info.hasOwnProperty(key)) {
        Data.append(key, user_info[key]);
      }
    }

    Data.append("image", image);
    console.log(token);

    axios
      .post("https://midimind.runasp.net/api/Doctor/addDoctor", Data, {
        headers: {
          token: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("Id",res.data.doctorId)
        navigate("/home");
      })
      .catch((err) => {
        setMessage(err.response.data);
        setButton_display("")
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
              {/* Doctor Name input */}
              <div class="col-md-6">
                <label for="name" class="form-label">
                  الاسم
                </label>
                <input
                  type="text"
                  class={`form-control ${style.inputChange}`}
                  placeholder="ادخل الاسم كاملا"
                  id="name"
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
                <label for="ssn" class="form-label">
                  الرقم القومى
                </label>
                <input
                  type="number"
                  class={`form-control ${style.inputChange}`}
                  id="ssn"
                  placeholder="ادخل 14 رقم"
                  required
                  name="ssn"
                  onChange={HandleSumbit}
                />
              </div>
              {/* specailization input */}
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
              {/* personal image or avatar input */}
              <div class="col-md-12">
                <label for="specailization" class="form-label">
                  الصوره
                </label>
                <input
                  type="file"
                  class={`form-control ${style.inputChange}`}
                  id="image"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("برجاء ادخل التخصص")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                  name="imge"
                  onChange={HandleImage}
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
                  required
                  onChange={HandleSumbit}
                />
              </div>
              {/* Doctor gender input */}
              <div class="col-md-12">
                <label for="gender" class="form-label d-block">
                  النوع
                </label>
                <div class={`${style.users}`}>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gender"
                    value="male"
                    id="gender1"
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
                    value="female"
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
              {/* Submit button */}
              <div class="col-12  text-center">
                <button class={`${Button_display} btn btn-dark`} type="submit">
                  انشاء حساب
                </button>
              </div>
              {/* More registeration options */}
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

export default Doctor;
