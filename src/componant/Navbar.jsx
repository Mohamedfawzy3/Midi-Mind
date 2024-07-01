import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "../styles/nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const Navbar = () => {
  const [flag, setflag] = useState(true);
  const spanRefs = useRef([]);
  const ulref = useRef();

  const [token, SetToken] = useState(localStorage.getItem("token"));
  const logout=()=>{
 localStorage.clear()
 
 navigate("/home")
  
  window.location.reload()
  
}
  const handleIconClick = () => {
    setflag(!flag);
    if (flag) {
      console.log(ulref.current);
      ulref.current.style.display = "block";
      spanRefs.current[0].style.cssText =
        "width: 100%; transform-origin: right 0%; transform: rotate(-48deg);";
      spanRefs.current[1].style.opacity = "0";
      spanRefs.current[2].style.cssText =
        "width: 100%; transform-origin: right 0%; transform: rotate(45deg);";
    } else {
      ulref.current.style.display = "none";
      spanRefs.current[0].style.cssText =
        "width: 80%; transform-origin: right 0%; transform: rotate(0deg);";
      spanRefs.current[1].style.opacity = "1";
      spanRefs.current[2].style.cssText =
        "width: 80%; transform-origin: right 0%; transform: rotate(0deg);";
    }
  };
  let navigate = useNavigate();

  let [userData,setUserData]=useState({})
  const Get_signup_user=(userType,userId)=>{
axios.get(`https://localhost:7189/api/${userType}/id?id=${userId}`)
.then((res)=>{
setUserData(res.data)
})
.catch((err)=>{
  console.log(err.response.data)
})
  }
useEffect(()=>{
Get_signup_user(localStorage.getItem("userType"),localStorage.getItem("Id"))
},[])

  return (
    <div>
      <div className={`${style.nav} `}>
        <div
          className={`${style.navContainer} container d-flex justify-content-between align-items-center`}
        >
          <div className={`${style.logo} `}>
            <Link to={"/Home"}>
              <img src={require("../images/logo5.png")} alt="Logo" />
            </Link>
          </div>
          <div>
            <div
              className={style.icon}
              onClick={(e) => {
                handleIconClick();
              }}
            >
              <span
                ref={(el) => (spanRefs.current[0] = el)}
                class={style.one}
              ></span>
              <span
                ref={(el) => (spanRefs.current[1] = el)}
                class={style.two}
              ></span>
              <span
                ref={(el) => (spanRefs.current[2] = el)}
                class={style.three}
              ></span>
            </div>
            <div
              className={`${style.links} col-sm-12 text-sm-center d-sm-flex align-item-center`}
              ref={ulref}
            >
              <ul className="d-flex flex-column flex-sm-row text-sm-center">
                <li className=" ms-sm-1 mb-1 ">
                  <Link to="/">الرئيسية</Link>
                </li>
                
                {localStorage.getItem("userType")=="patient"? <> <li className=" ms-sm-1 mb-1">
                  <Link to={`/patiant/${localStorage.getItem("Id")}`}>بياناتى</Link>
                </li>
                <li className=" ms-sm-1 mb-1">
                  <Link to={`/${localStorage.getItem("Id")}/record/rosheta`}>ملفاتى</Link>
                </li></>: <li>
                  <Link to="/FindPatient">زياره</Link>
                </li>}
              
                <li>
                  <Link to="/contactus">تواصل معنا</Link>
                </li>
              </ul>

              {/*Handle regiteration buttons and profile info*/}
              {token ? <>
                <div className={`d-flex align-items-center d-none d-sm-flex ${style.profile}`}>
                  <span>{userData.user?.userName||userData.name}</span>
                  <div className={`${style.profile_img} me-2`}>
                    <Link to="/home">
                      
                      <img
                        src={userData.logo||userData.image}
                        alt="Profiel_img"
                      />
                    </Link>
                  </div>
                </div>
                {/* log out */}
                <div><div className ={`${style.logout_btn}`}onClick={logout}><FontAwesomeIcon icon={faArrowRightFromBracket} /></div></div>
                </>
              : (
                <div className="m-4 m-sm-1">
                  <button
                    onClick={() => navigate("/signin")}
                    className="btn btn-primary px-2 ms-1"
                  >
                    تسجيل الدخول
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className="btn-dark btn px-2"
                  >
                    انشاء حساب
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
