import React, { useEffect, useState } from "react";
import style from "../../styles/sign.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUP = () => {
  const [gov, setGov] = useState("");
  const [index, setIndex] = useState();
  let [flag, setFlag] = useState(false);
  let [valid, setValid] = useState(true);
  let [message, setMessage] = useState("");
  const [Button_display, setButton_display] = useState("");
  let Navigate = useNavigate();
  const handleCity = (e) => {
    console.log(e.target.value);
    setGov(e.target.value);
    setFlag(true);
    const selectedOption = e.target.options[e.target.selectedIndex];
    setIndex(selectedOption.getAttribute("index"));
    console.log("Index of selected option:", index);
  };
  const Government = () => {
    axios
      .get("https://atfawry.fawrystaging.com/ECommerceWeb/api/lookups/govs")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    Government();
  }, []);
  const [city, setCity] = useState([
    [
      "اغاخان",
      "الازبكية",
      "الازهر",
      "الاميرية",
      "البساتين",
      "التبين",
      "الجزيرة",
      "الجمالية",
      "الحرفيين",
      "الحسين",
      "الحلمية",
      "الحلمية الجديدة",
      "الخليفة",
      "الدراسة",
      "الدرب الاحمر",
      "الروضة",
      "الزاوية الحمراء",
      "الزمالك",
      "الزيتون",
      "الساحل",
      "السبتية",
      "السكاكينى",
      "السواح",
      "السيدة زينب",
      "السيدة عائشة",
      "السيدة نفيسة",
      "الشرابية",
      "الظاهر",
      "العتبة",
      "الفجالة",
      "الفسطاط",
      "القاهرة الجديدة",
      "القبة الجديدة",
      "القطامية",
      "المرج",
      "المرج الجديدة",
      "المطرية",
      "المعادى",
      "المعصرة",
      "المقطم",
      "الملك الصالح",
      "المنيرة",
      "المنيل",
      "الموسكى",
      "النزهة الجديدة",
      "الهايكستب",
      "الوايلى",
      "باب الخلق",
      "باب الشعرية",
      "باب اللوق",
      "بولاق",
      "اغاخان",
      "الازبكية",
      "الازهر",
      "الاميرية",
      "البساتين",
      "التبين",
      "الجزيرة",
      "الجمالية",
      "الحرفيين",
      "الحسين",
      "الحلمية",
      "الحلمية الجديدة",
      "الخليفة",
      "الدراسة",
      "الدرب الاحمر",
      "الروضة",
      "الزاوية الحمراء",
      "الزمالك",
      "الزيتون",
      "الساحل",
      "السبتية",
      "السكاكينى",
      "السواح",
      "السيدة زينب",
      "السيدة عائشة",
      "السيدة نفيسة",
      "الشرابية",
      "الظاهر",
      "العتبة",
      "الفجالة",
      "الفسطاط",
      "القاهرة الجديدة",
      "القبة الجديدة",
      "القطامية",
      "المرج",
      "المرج الجديدة",
      "المطرية",
      "المعادى",
      "المعصرة",
      "المقطم",
      "الملك الصالح",
      "المنيرة",
      "المنيل",
      "الموسكى",
      "النزهة الجديدة",
      "الهايكستب",
      "الوايلى",
      "باب الخلق",
      "باب الشعرية",
      "باب اللوق",
      "بولاق",
      "جاردن سيتى",
      "جسر السويس",
      "حدائق الزيتون",
      "حدائق القبة",
      "حدائق حلوان",
      "حلمية الزيتون",
      "حلوان",
      "حمامات القبة",
      "خان الخليلى",
      "دار السلام",
      "رملة بولاق",
      "روض الفرج",
      "سراى القبة",
      "شبرا",
      "شبرا",
      "شق الثعبان",
      "طره",
      "طريق القاهرة السويس",
      "طريق مصر الاسماعيلية الصحراوى",
      "عابدين",
      "عباسية",
      "عزبة النخل",
      "عين الصيرة",
      "عين شمس",
      "عين شمس الشرقية",
      "عين شمس الغربية",
      "غمره",
      "فم الخليج",
      "قصر العينى",
      "قلعة",
      "كفر العلو",
      "كوبرى القبة",
      "كوتسيكا",
      "لاظوغلى",
      "مؤسسة الزكاة",
      "مدينة 15 مايو",
      "مدينة الرحاب",
      "مدينة السلام",
      "مدينة الشروق",
      "مدينة بدر",
      "مدينة قباء",
      "مدينة نصر",
      "مدينة نصر",
      "مدينتى",
      "مصر الجديدة",
      "مصر الجديده",
      "مصر القديمة",
      "منشية ناصر",
      "منيل الروضة",
      "وادى حوف",
      "وسط البلد",
    ],
    [
      "ابو يوسف",
      "ابى الدرداء",
      "ابى العباس",
      "ابيس",
      "ارض الصبحية",
      "ارض تشاكوس",
      "الابراهيمية",
      "الازاريطة",
      "الاقبال",
      "الانفوشى",
      "الباب الجديد",
      "البستان",
      "البيطاش",
      "الجمرك",
      "الحضرة",
      "الحضرة الجديدة",
      "الحضرة بحرى",
      "الحضرة قبلى",
      "الحى اللاتينى",
      "الدخيلة",
      "الرأس السوداء",
      "الرمل الميرى",
      "السرايا",
      "السكة الجديدة",
      "السلطان حسين",
      "السيوف",
      "السيوف بحرى",
      "السيوف ترام",
      "السيوف شماعة",
      "الشاطبى",
      "الشلالات",
      "الطابية",
      "الظاهرية",
      "العامرية",
      "العجمى",
      "العصافرة",
      "العصافرة بحرى",
      "العصافرة قبلى",
      "العطارين",
      "العوايد",
      "الفراعنة",
      "القبارى",
      "اللبان",
      "المتراس",
      "المسلة شرق",
      "المعمورة",
      "المعمورة البلد",
      "المعمورة الشاطئ",
      "المفروزة",
      "المكس",
      "الملاحة",
      "المنتزه",
      "المندرة",
      "المندرة البحرية",
      "المندره قبلى",
      "المنشية",
      "المنشية الجديدة",
      "المنشية الصغرى",
      "المينا الشرقية",
      "الناصرية",
      "النزهة",
      "الهانوفيل",
      "الهداية",
      "الورديان",
      "الوزارة",
      "ام زغيو",
      "امبروزو",
      "اول الرمل",
      "باب سدرة",
      "باب شرق",
      "باكوس",
      "بحرى",
      "برج العرب",
      "برج العرب الجديدة",
      "بولكلى",
      "بيانكى",
      "ثانى الرمل",
      "ثروت",
      "جليم",
      "جناكليس",
      "حجر النواتية",
      "خورشيد",
      "رأس التين",
      "راغب",
      "رشدى",
      "زيزينيا",
      "سابا باشا",
      "سان استيفانو",
      "سبورتنج",
      "سبورتنج الصغرى",
      "سبورتنج الكبرى",
      "ستانلى",
      "سموحة",
      "سيدى بشر",
      "سيدى بشر",
      "سيدى بشر الترام",
      "سيدى بشر بحرى",
      "سيدى بشر قبلى",
      "سيدى جابر",
      "سيدى جابر الشيخ",
      "سيدى جابر المحطة",
      "شدس",
      "صفر",
      "طريق الاسكندرية القاهرة الزراعى",
      "طريق الاسكندرية القاهرة الصحراوى",
      "غبريال",
      "غربال",
      "غيط العنب",
      "فلمينج",
      "فيكتوريا",
      "كامب شيزار",
      "كرموز",
      "كفر عبده",
      "كليوباترا",
      "كليوباترا الصغرى",
      "كليوباترا المحطة",
      "كليوباترا حمامات",
      "كوم الدكة",
      "كوم الشقافة",
      "كينج مريوط",
      "لوران",
      "محرم بك",
      "محطة الرمل",
      "محطة مصر",
      "مرغم",
      "مرغم قبلى",
      "مصطفى كامل",
      "منشية النزهة",
      "منطقة المطار",
      "ميامى",
      "ميدان الساعة",
      "مينا البصل",
      "وابور المياه",
      "وادى القمر",
      "وينجت",
    ],
    [
      "ابو النمرس",
      "ابو رواش",
      "اطفيح",
      "البدرشين",
      "البراجيل",
      "الجيزة",
      "الحوامدية",
      "الدقى",
      "السادس من اكتوبر",
      "الصحفيين",
      "الصف",
      "العجوزة",
      "العياط",
      "الكيت كات",
      "المنيب",
      "المهندسين",
      "المهندسين",
      "الهرم",
      "الوراق",
      "امبابه",
      "اوسيم",
      "بولاق الدكرور",
      "بين السرايات",
      "جزيرة الذهب",
      "سقارة",
      "طموه",
      "فيصل",
      "كرداسة",
      "منشية القناطر",
    ],
    [
      "ابو حماد",
      "ابو كبير",
      "الابراهيمية",
      "الحسينية",
      "الزقازيق",
      "العاشر من رمضان",
      "القرين",
      "القنايات",
      "اولاد صقر",
      "بلبيس",
      "ديرب نجم",
      "فاقوس",
      "كفر صقر",
      "مشتول السوق",
      "منيا القمح",
      "ههيا",
    ],
    [
      "اجا",
      "الجمالية",
      "السنبلاوين",
      "الكردى",
      "المطرية",
      "المنزلة",
      "المنصورة",
      "بلقاس",
      "جمصة",
      "دكرنس",
      "شربين",
      "طلخا",
      "طماى الامديد",
      "منية النصر",
      "منيه سمنود",
      "ميت سلسيل",
      "ميت غمر",
      "نبروه",
    ],
    [
      "الجونة",
      "الغردقة",
      "القصير",
      "جزيرة سفاجا",
      "جنوب قصير",
      "سفاجا",
      "سهل حشيش",
      "طريق القرى",
      "كفر الجونة",
    ],
    [
      "السنطة",
      "المحلة الكبرى",
      "بسيون",
      "زفتا",
      "سمنود",
      "طنطا",
      "قطور",
      "كفر الزيات",
    ],
    [
      "ابشواى",
      "اطسا",
      "البحارى",
      "الجامعة",
      "الحادقة",
      "السبع سواقى",
      "السيالة",
      "الصوفى",
      "الفيوم",
      "المسلة",
      "دلة",
      "سنورس",
      "طامية",
      "طريق مصر الفيوم الصحراوى",
      "كوم اوشيم",
      "منشأة لطف الله",
      "يوسف الصديق",
    ],
    [
      "ابو خليفة",
      "ابو سلطان",
      "ابو صوير البلاد",
      "ابو صوير المحطة",
      "التل الكبير",
      "الثلاثينى",
      "الشيخ زايد",
      "الطريق الدائرى",
      "القصاصين الجديدة",
      "القصاصين القديمة",
      "المحطة الجديدة",
      "المنطقة الصناعية",
      "جبل مريم",
      "حى الاعلام",
      "حى الزهور",
      "حى السلام",
      "حى الصفا",
      "حى المدينة",
      "حى ثالث",
      "سرابيوم",
      "طريق اسماعيلية مصر الصحراوى",
      "فايد",
      "قنطرة شرق",
      "قنطرة غرب",
      "مستقبل",
      "منشية الشهداء",
      "منطقة التمليك",
      "نفيشة",
      "وسط البلد",
    ],
    [
      "الحامول",
      "الرياض",
      "بلطيم",
      "بيلا",
      "تقسيم 2",
      "حى شرق",
      "دسوق",
      "رشيد",
      "سخا",
      "سيدى سالم",
      "سيدى غازى",
      "فوه",
      "قلين",
      "مساكن الحلقة",
      "مطوبس",
    ],
    ["الابيض", "رأس الحكمة", "رأس الخيمة", "سيدى برانى", "عجيبة", "علم الروم"],
    [
      "شبين الكوم",
      "الباجور",
      "الشهداء",
      "قويسنا",
      "منوف",
      "سرس الليان",
      "بركه السبع",
      "تلا",
    ],
    [
      "ابو طشت",
      "ارمنت",
      "اسنا",
      "المعنا",
      "الوقف",
      "بندر قنا",
      "دشنا",
      "طريق قنا سفاجا",
      "طريق مصر اسوان",
      "فرشوط",
      "قفط",
      "قوص",
      "مركز قنا",
      "نجع حمادى",
      "نقادة",
      "وسط البلد",
    ],
    [],
    [
      "ابو الريش",
      "ابو سمبل",
      "ادفو",
      "اسوان",
      "اطلس",
      "البصيلية",
      "الرديسية قبلى",
      "السباعية غرب",
      "السيل شرق",
      "السيل غرب",
      "الكورنيش",
      "بحيرة ناصر",
      "حى الشروق",
      "دراو",
      "عنيبه",
      "كلابشة",
      "كوم امبو",
      "نصر النوبة",
    ],
    [
      "اخميم",
      "البلينا",
      "العسيرات",
      "الكوثر",
      "المراغة",
      "المنشاه",
      "بنى هلال",
      "جرجا",
      "جهينة",
      "حى شرق",
      "حى غرب",
      "دار السلام",
      "ساقلتة",
      "سوهاج",
      "طما",
      "طهطا",
      "نجع اولاد نصير",
    ],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  let [user_info, setUser_info] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    governorate: "",
    city: "",
    street: "",
    password: "Mohamed%1234",
  });
  const HandleSumbit = (e) => {
    if (e.target.name === gov) {
      setGov(e.target.value);
      setFlag(true);
      const selectedOption = e.target.options[e.target.selectedIndex];
      setIndex(selectedOption.getAttribute("index"));
      console.log("Index of selected option:", index);
    }
    const { name, value } = e.target;
    setUser_info((old) => ({
      ...old,
      [name]: value,
    }));
    console.log(user_info);
  };
  let goToNextPage = (e) => {
    e.preventDefault();

    if (user_info.password !== user_info.RePassword) {
      setValid(false);
      setMessage("password doesn't match");
    } else if (user_info.phoneNumber.length != 11) {
      console.log(user_info.phoneNumber.length);
      setValid(false);
      setMessage("رقم الهاتف  يجب ان يكون 11 رقم ");
    } else if (valid) {
      AddUser();
    }
  };

  const AddUser = () => {
    setButton_display("disabled");
    axios
      .post("http://mohamedfawzy3-001-site1.atempurl.com/Auth/register", user_info)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userType", user_info.userType);

        Navigate(`/signup/${user_info.userType}`);
      })
      .catch((err) => {
        console.log(err.response.data);
        setMessage(err.response.data);
        setButton_display("");
      });
  };
  return (
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
          <form class="row g-3 col-md-10 mx-auto" onSubmit={goToNextPage}>
            {/* user name input */}
            <div class="col-md-12">
              <label for="user_name" class="form-label">
                اسم المستخدم
              </label>

              <input
                type="text"
                class={`form-control ${style.inputChange}`}
                name="userName"
                id="userName"
                placeholder="برجاء ادخال اسم المستخدم"
                aria-describedby="inputGroupPrepend2"
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("برجاء ادخال اسم مستخدم صحيح")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                value={user_info.userName}
                onChange={HandleSumbit}
              />
            </div>
            {/* Email input */}
            <div class="col-md-12">
              <label for="email" class="form-label">
                البريد الالكترونى
              </label>

              <input
                type="email"
                class={`form-control ${style.inputChange}`}
                name="email"
                id="email"
                placeholder="Example@gmail.com"
                aria-describedby="inputGroupPrepend2"
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity("برجاء ادخال بريد الكترونى صحيح")
                }
                onInput={(e) => e.target.setCustomValidity("")}
                value={user_info.email}
                onChange={HandleSumbit}
              />
            </div>
            {/* Phone number input */}
            <div class="col-md-12">
              <label for="phoneNumber" class="form-label">
                الهاتف
              </label>
              <input
                type="number"
                class={`form-control ${style.inputChange}`}
                name="phoneNumber"
                id="phoneNumber"
                placeholder="ادخل رقم الهاتف المحمول"
                required
                value={user_info.phoneNumber}
                onChange={HandleSumbit}
              />
            </div>
            {/* Governorate selection */}
            <div class="col-6">
              <label for="gov" class="form-label">
                المحافظه
              </label>
              <select
                class="form-select"
                id="gov"
                onChange={(e) => {
                  HandleSumbit(e);
                  handleCity(e);
                }}
                required
                name="governorate"
                value={user_info.governorate}
              >
                <option selected disabled value="">
                  اختر المحافظه
                </option>
                <option value="القاهرة" index={0}>
                  القاهرة
                </option>
                <option value="الإسكندرية" index={1}>
                  الإسكندرية
                </option>
                <option value="الجيزة" index={2}>
                  الجيزة
                </option>
                <option value="الشرقية" index={3}>
                  الشرقية
                </option>
                <option value="الدقهلية" index={4}>
                  الدقهلية
                </option>
                <option value="البحر الأحمر" index={5}>
                  البحر الأحمر
                </option>
                <option value="الغربية" index={6}>
                  الغربية
                </option>
                <option value="الفيوم" index={7}>
                  الفيوم
                </option>
                <option value="الإسماعيلية" index={8}>
                  الإسماعيلية
                </option>
                <option value="كفر الشيخ" index={9}>
                  كفر الشيخ
                </option>
                <option value="مطروح" index={10}>
                  مطروح
                </option>
                <option value="المنوفية" index={11}>
                  المنوفية
                </option>
                <option value="قنا" index={12}>
                  قنا
                </option>
                <option value="الأقصر" index={13}>
                  الأقصر
                </option>
                <option value="أسوان" index={14}>
                  أسوان
                </option>
                <option value="سوهاج" index={15}>
                  سوهاج
                </option>
                <option value="بني سويف" index={16}>
                  بني سويف
                </option>
                <option value="الوادي الجديد" index={17}>
                  الوادي الجديد
                </option>
                <option value="البحيرة" index={18}>
                  البحيرة
                </option>
                <option value="شمال سيناء" index={19}>
                  شمال سيناء
                </option>
                <option value="جنوب سيناء" index={20}>
                  جنوب سيناء
                </option>
                <option value="السويس" index={21}>
                  السويس
                </option>
                <option value="المنيا" index={22}>
                  المنيا
                </option>
                <option value="دمياط" index={23}>
                  دمياط
                </option>
                <option value="الشرقية" index={24}>
                  الشرقية
                </option>
                <option value="البحر الأحمر" index={25}>
                  البحر الأحمر
                </option>
                <option value="الوادي الجديد" index={26}>
                  الوادي الجديد
                </option>
              </select>
            </div>
            {/* City selection */}
            <div class="col-6">
              <label for="city" class="form-label">
                المدينه
              </label>
              <select
                class="form-select"
                id="city"
                disabled={!flag}
                required
                name="city"
                value={user_info.city}
                onChange={HandleSumbit}
              >
                <option selected disabled value="">
                  اختر مدينه
                </option>
                {flag
                  ? city[index].map((el) => {
                      return <option value={el}>{el}</option>;
                    })
                  : null}
              </select>
            </div>
            {/* street input */}
            <div class="col-sm-12">
              <label for="validationDefault03" class="form-label">
                اسم الشارع
              </label>
              <input
                type="text"
                class={`form-control round-1 ${style.inputChange}`}
                id="validationDefault03"
                placeholder="اسم الشارع"
                required
                name="street"
                value={user_info.street}
                onChange={HandleSumbit}
              />
            </div>
            {/* user type selection */}
            <div class="col-md-12 ">
              <label for="users" class="form-label">
                هل انت؟
              </label>
              <div className="d-sm-flex justify-content-between">
                <div>
                  <div class={`${style.users} mb-2`}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="userType"
                      value="patient"
                      onChange={HandleSumbit}
                      id="Patient"
                    />
                    <label class="form-check-label me-1" for="patient">
                      مريض
                    </label>
                  </div>
                  <div class={`${style.users} mb-2`}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="userType"
                      value="Doctor"
                      onChange={HandleSumbit}
                      id="Doctor"
                    />
                    <label class="form-check-label me-1" for="doctor">
                      طبيب
                    </label>
                  </div>
                  <div class={`${style.users} mb-2`}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="userType"
                      value="Clinic"
                      onChange={HandleSumbit}
                      id="clinic"
                    />
                    <label class="form-check-label me-1" for="clinic">
                      عياده
                    </label>
                  </div>
                  <div class={`${style.users} mb-2`}></div>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="userType"
                    value="Pharmacy"
                    onChange={HandleSumbit}
                    id="pharmacy"
                  />
                  <label class="form-check-label me-1" for="pharmacy">
                    صيدليه
                  </label>
                </div>
                <div className="col-md-9 col-12">
                  <div class={`${style.users} mb-2`}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="userType"
                      value="Lab"
                      onChange={HandleSumbit}
                      id="Lab"
                    />
                    <label class="form-check-label me-1" for="laboratory">
                      معمل تحاليل
                    </label>
                  </div>
                  <div class={`${style.users} mb-2`}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="userType"
                      value="Radiology"
                      onChange={HandleSumbit}
                      id="x-ray"
                    />
                    <label class="form-check-label me-1" for="x-ray">
                      معمل اشعه
                    </label>
                  </div>
                  <div class={`${style.users} mb-2`}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="userType"
                      value="Hospital"
                      onChange={HandleSumbit}
                      id="Hospital"
                    />
                    <label class="form-check-label me-1" for="patient">
                      مشتشفى
                    </label>
                  </div>
                  <div class={`${style.users} mb-2`}>
                    <input
                      class="form-check-input"
                      type="radio"
                      name="userType"
                      value="HealthUnit"
                      onChange={HandleSumbit}
                      id="HealthUnit"
                    />
                    <label class="form-check-label me-1" for="patient">
                      وحده صحيه
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* password input */}
            <div class="col-md-6">
              <label for="pass" class="form-label">
                الباسورد
              </label>
              <input
                type="password"
                class={`form-control ${style.inputChange}`}
                id="pass"
                placeholder="ادخل باسورد"
                required
                name="password"
                value={user_info.password}
                onChange={HandleSumbit}
              />
            </div>
            {/* confirm password input */}
            <div class="col-md-6">
              <label for="pass2" class="form-label">
                اعد الباسورد
              </label>
              <input
                type="password"
                class={`form-control ${style.inputChange}`}
                id="pass2"
                placeholder="اعد كتابه الباسورد"
                required
                name="RePassword"
                onChange={HandleSumbit}
              />
            </div>
            {/*display error mesage  */}
            {message != "" ? (
              <div class="alert alert-danger text-center" role="alert">
                {message}
              </div>
            ) : null}
            {/* submtion and go for the secend regester form */}
            <div class="col-12  text-center">
              <button class={`${Button_display} btn btn-dark`}>التالى</button>
            </div>
            {/* go to login page */}
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
  );
};

export default SignUP;
