import React, { useState ,useEffect} from "react";
import style from "../styles/sign.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signin = () => {
  let [user_info, setUser_info] = useState({});
  const [message, setMessage] = useState("");
  const [Button_display,setButton_display]=useState("")
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    const { name, value } = e.target;
    setUser_info((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(user_info);
  };
  const Post=()=>{
    axios
      .post("https://localhost:7189/Auth/token", user_info)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userType",res.data.userType)
        get_userId();
        setMessage("Done");
        setTimeout(()=>{
          navigate("/home");
        },1000)
      })
      .catch((err) => {
        setMessage(err.response.data);
        setButton_display("")
      });
  }
  const Submtion = (e) => {
    e.preventDefault();
    Post()
    setButton_display("disabled")
  };
  useEffect(() => {
    if (message !== "") {
      const timer = setTimeout(() => {
        setMessage("")
      }, 1000);

      // Cleanup the timer when the component is unmounted or message changes
      return () => clearTimeout(timer);
    }
  }, [message]);
  const get_userId=()=>{
    axios.get("https://localhost:7189/Auth",{headers:{
      token:localStorage.getItem("token")
    }})
    .then((res)=>{
      console.log(res.data)
      localStorage.setItem("Id",res.data.id)})
    .catch(err=>console.log(err.response.data))
  }
  return (
    <div>
      <div className={`${style.body} d-flex align-center `}>
        <div
          className="container p-4 d-flex align-items-center"
          style={{ height: "100vh" }}
        >
          <div
            className={`${style.box} container col-lg-6 col-md-10 col-12 py-3 bg-white rounded-4 `}
          >
            <h2 className="text-center mb-4">تسجيل الدخول</h2>

            <form class="row g-3 col-md-10 mx-auto" onSubmit={Submtion}>
              {/* userName input */}
              <div class="col-12">
                <label for="userName" class="form-label">
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  class={`form-control ${style.inputChange}`}
                  placeholder="ادخل اسم مستخدم"
                  id="userName"
                  name="userName"
                  onInvalid={(e) =>
                    e.target.setCustomValidity("ادخل اسم مستخدم")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  required
                  onChange={HandleSubmit}
                />
              </div>
              {/* Password input */}
              <div class="col-md-12">
                <label for="password" class="form-label">
                  كلمة المرور
                </label>
                <input
                  type="password"
                  class={`form-control ${style.inputChange}`}
                  name="password"
                  id="password"
                  placeholder="ادخل كلمة المرور"
                  aria-describedby="inputGroupPrepend2"
                  required
                  onChange={HandleSubmit}
                />
              </div>
              {/* Display error mesage */}
              {message != "" ? (
                <div class="alert alert-success fw-bolder text-center" role="alert">
                  {message}
                </div>
              ) : null
              
            }
              {/* Sing in button */}
              <div class="col-12 text-center">
                <button class={`btn btn-dark ${Button_display}`} type="submit">
                  تسجيل الدخول
                </button>
              </div>
              {/* More regestration options */}
              <div className="text-center">
                ليس لديك حساب ؟{" "}
                <span>
                  <Link to="/signup">انشاء حساب</Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
