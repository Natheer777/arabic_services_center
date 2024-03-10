import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <>
      <div className="Main">
        <div className="Main_img text-center">
          <div className="details  d-flex justify-content-center align-items-center">
            <h2 className="position-absolute left">مركز خدمات اللغة العربية</h2>
            <h5 className=" mt-1 right">نصل الشرق بالغرب بلغتنا</h5>
            <div className="buttons">
              <button type="button " className="register rounded top">
                مشاهدة المزيد
              </button>
              <button type="button " className="login rounded top">
                احجز مقعدك
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
