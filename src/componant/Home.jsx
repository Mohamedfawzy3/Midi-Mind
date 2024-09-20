import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faFlask,
  faStaffSnake,
  faUserDoctor,
  faRadiation,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import style from "../styles/Home.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
const Home = () => {

  let navigate = useNavigate();
  const [token, SetToken] = useState(localStorage.getItem("token"));
  const [userType] = useState(localStorage.getItem("userType"));
  const handle_startNow_button = () => {
    if (
      userType == "Clinic" ||
      userType == "Doctor" ||
      userType == "Lab" ||
      userType == "Pharmacy" ||
      userType == "Radiology"
    )
      navigate("/FindPatient");
    else if (userType == "patient") {
      navigate(`/Patiant/${localStorage.getItem("Id")}`);
      console.log("fffff");
    }
    else navigate("/signup")
  };

  return (
    <div className={`${style.body_content}`}>
      <Navbar />
      <div className={`${style.Box}`}>
        <div className={`${style.box} container `}>
          <div
            className={`col-12 text-center text-sm-end col-sm-7 flex-left ${style.homeContent}`}
          >
            <div>صحتك بالدنيا</div>
            <p>
              علشان كده وفرنا عليك دوشة الورق الكتير دلوقتى كل بياناتك فى جيبك
              تقدر توصلها فى اى وقت وتشاركها مع طبيبك وأماكن أخرى
            </p>
            <div>
              <button
                className={`${style.start_button}`}
                onClick={handle_startNow_button}
              >
                ابدأ الأن
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.info}`}>
        <div className="container py-5 d-flex justify-content-between flex-column flex-sm-row">
          <div className="text-center mb-5 m-sm-2 ">
            <span className="fs-1 fw-bold">
              <img src={require("../images/RR.jpg")} alt="Thinking_img" />
            </span>
            <h3>طبيب</h3>
          </div>
          <div className="text-center mb-5 m-sm-2 ">
            <span className="fs-1 fw-bold">
              <img src={require("../images/SS.jpg")} alt="Thinking_img" />
            </span>
            <h3>صيدلية</h3>
          </div>
          <div className="text-center mb-5 m-sm-2 ">
            <span className="fs-1 fw-bold">
              <img src={require("../images/TT.jpg")} alt="Thinking_img" />
            </span>
            <h3>معمل تحليل</h3>
          </div>
          <div className="text-center ">
            <span className="fs-1 fw-bold">
              <img src={require("../images/XX.jpg")} alt="Thinking_img" />
            </span>
            <h3>معمل اشعة</h3>
          </div>
        </div>
      </div>
      <section className={`${style.members} container py-4`}>
        <h2 className="text-center mb-5 fs-1 fw-bold">المحتوي</h2>
      <div className="">
      <div
          className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}
        >
          <div className={`${style.image} col-2 col-lg-1 mb-3`}>
            <img src={require("../images/DD.jpg")} alt="Thinking_img" />
          </div>
          <div>
            <h3 className={style.kind}>الطبيب</h3>{" "}
            <div className={`${style.text} fs-5`}>
              الطبيب يقدر يطلع على ملفك الطبى ومن خلالة يقدر المعلومات الضرورية
              قبل اى تشخيص ومن ثم الحصول على تشخيص سليم ويقدر يضيفلك التحاليل
              والاشاعات المطلوبة وكمان يكتبلك روشتة الكترونية
            </div>
          </div>
        </div>
        <div
          className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}
        >
          <div className={`${style.image} col-2 col-lg-1 mb-3`}>
            <img src={require("../images/LL.jpg")} alt="Thinking_img" />
          </div>
          <div>
            <h3 className={style.kind}>الصيدلية</h3>
            <div className={`${style.text} fs-5`}>
              دلوقتى الصيدلية تقدر تتطلع على حسابك وتشوف العلاج المطلوب و تصرفة
              لك بكل سهولة وبدون أخطاء وكمان تقدر تتابع قياس الضغط والسكر وغيرة
              وتضيف البيانات دى لحسابك
            </div>
          </div>
        </div>
        <div
          className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}
        >
          <div className={`${style.image} col-2 col-lg-1 mb-3`}>
            <img src={require("../images/PP.jpg")} alt="Thinking_img" />
          </div>
          <div>
            <h3 className={style.kind}>معمل التحليل</h3>{" "}
            <div className={`${style.text} fs-5`}>
              يقدر يطلع على التحاليل والفحوصات الموجودة فى ملفك والمطلوب إجرائها
              ومن ثم رفعها علي ملفك الطبى ويقدر طبيبك يطلع عليها
            </div>
          </div>
        </div>
        <div
          className={`${style.box} d-flex align-items-center text-center text-sm-end  mb-3 flex-column flex-sm-row`}
        >
          <div className={`${style.image} col-2 col-lg-1 mb-3`}>
            <img src={require("../images/qw.jpg")} alt="Thinking_img" />
          </div>
          <div>
            <h3 className={style.kind}>معمل الاشعة</h3>
            <div className={`${style.text} fs-5`}>
              معمل الاشعة يقدر يشوف الفحوصات المطلوبة فى ملفك الطبى وبمجرد
              الانتهاء منها يتم رفع نتائج الفحوصات إلى ملفك مباشرة لتكون جاهزة
              للإطلع عليها من قبل طبيبك.
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className={`${style.why_us} `}>
        <div class="container">
          <div class="row">
            <div className={`${style.col - 12}`}>
              <p className={`${style.FCB} fs-3`}>
                أبرز الإنجازات والأرقام التي تعكس جهودنا المستمرة في تقديم خدمات
                رعاية صحية متميزة وموثوقة
              </p>
            </div>
          </div>
          <div class="row numbers-cards">
            <div class="col-md-3">
              <div className={`${style.iconbox}`}>
                <div className={`${style.iconbg}`}>
                  <img
                    class="number-icon-img js-lazy-image"
                    src="https://altibbi.com/theme/altibbi/icons/tbi-download.svg"
                    alt=""
                  />
                </div>
                <div class="number-icon-body">
                  <span className={`${style.rr}`}>3M+ </span>
                  <p className={`${style.Description}`}>تحميل للتطبيق </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div className={`${style.iconbox}`}>
                <div className={`${style.iconbg}`}>
                  <img
                    class="number-icon-img js-lazy-image"
                    src="https://altibbi.com/theme/altibbi/icons/tbi-doctor.svg"
                    alt=""
                  />
                </div>
                <div class="number-icon-body">
                  <span className={`${style.rr}`}>3M+ </span>
                  <p className={`${style.Description}`}>استشارة طبية </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div className={`${style.iconbox}`}>
                <div className={`${style.iconbg}`}>
                  <img
                    class="number-icon-img js-lazy-image"
                    src="https://altibbi.com/theme/altibbi/icons/tbi-question-grayblue.svg
"
                    alt=""
                  />
                </div>
                <div class="number-icon-body">
                  <span className={`${style.rr}`}>1.5M+ </span>
                  <p className={`${style.Description}`}>توصية طبية </p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div className={`${style.iconbox}`}>
                <div className={`${style.iconbg}`}>
                  <img
                    class="number-icon-img js-lazy-image"
                    src="https://altibbi.com/theme/altibbi/icons/tbi-profile-person.svg"
                    alt=""
                  />
                </div>
                <div class="number-icon-body">
                  <span className={`${style.rr}`}>192M+ </span>
                  <p className={`${style.Description}`}>مستخدم سنويا </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <article class="container">
          <div class="row">
            <div class="col-12 d-flex justify-content-center">
              <div class="section-heading-box">
                <h2 className={`${style.sectionheading}`}>لماذا نحن؟</h2>
                <section className={`${style.itemsbox}`}>
                  <div class="row">
                    <div class="col-md-3">
                      <div className="feature-item">
                        <div className={`${style.rectanglebox}`}>
                          <img
                            src="https://altibbi.com/theme/altibbi/icons/tbi-question.svg"
                            alt="question-icon"
                          />
                          <span className={`${style.featurenumber}`}>1</span>
                        </div>
                        <div className="feature-item-body">
                          <h4 className={`${style.featureheader2}`}>
                            خدمة 24 ساعة اسبوعيا
                          </h4>
                          <p className={`${style.featuredescription}`}>
                            لا داعي للانتظار في العيادات. تواصل مع أفضل الأطباء
                            وعلى مدار الساعة.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="feature-item">
                        <div className={`${style.rectanglebox}`}>
                          <img
                            src="https://altibbi.com/theme/altibbi/icons/tbi-quiz.svg"
                            alt="question-icon"
                          />
                          <span className={`${style.featurenumber}`}>2</span>
                        </div>
                        <div class="feature-item-body">
                          <h4 className={`${style.featureheader2}`}>
                            خصوصية وأمان{" "}
                          </h4>
                          <p className={`${style.featuredescription}`}>
                            نحرص على خصوصية معلوماتك الصحية ونستخدم أحدث
                            التقنيات لضمان أمان بياناتك.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="feature-item">
                        <div className={`${style.rectanglebox}`}>
                          <img
                            src="https://altibbi.com/theme/altibbi/icons/tbi-doctor-white.svg"
                            alt="question-icon"
                          />
                          <span className={`${style.featurenumber}`}>3</span>
                        </div>
                        <div class="feature-item-body">
                          <h4 className={`${style.featureheader2}`}>
                            أطباء معتمدين{" "}
                          </h4>
                          <p className={`${style.featuredescription}`}>
                            استشارات طبية مباشرة مع الأطباء من خلال الدردشة
                            الفورية والمكالمات.{" "}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="feature-item">
                        <div className={`${style.rectanglebox}`}>
                          <img
                            src="https://altibbi.com/theme/altibbi/icons/tbi-medical-record.svg"
                            alt="question-icon"
                          />
                          <span className={`${style.featurenumber}`}>4</span>
                        </div>
                        <div class="feature-item-body">
                          <h4 className={`${style.featureheader2}`}>
                            تكلفة مناسبة{" "}
                          </h4>
                          <p className={`${style.featuredescription}`}>
                            خدمات رعاية صحية بباقات اشتراك مختلفة تناسب
                            احتياجاتك.{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
