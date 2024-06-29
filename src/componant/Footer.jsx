import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div className="text-center p-3 border-top ">
      <p className="fs-6 fw-medium m-0 p-1">
        جميع الحقوق محفوظة &copy;{date.getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
