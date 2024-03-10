import React from "react";
import "./Definition.css";
import DefinitionImg from "../../assets/images/صورة واجهة ٦.jpeg";
import { TiAttachment } from "react-icons/ti";
import { HiChevronLeft } from "react-icons/hi";

export default function Definition() {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-12 left">
          <div className="Image">
            <img src={DefinitionImg} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="details_Definition">
            <h1 className="right">
              <TiAttachment /> من نحن ؟
            </h1>
            <p className="right">
              نحن فريق من مُدرِّسي اللغتين العربية واليابانية، يمتلك خبرة طويلة
              وغنية في تدريس اللغتين العربية واليابانية في مؤسسات تعليمية
              متعددة، ولفئات عمرية ذات مستويات لغوية مختلفة. ولدينا خبرة طويلة
              وغنية في مجال الترجمة الكتابية والترجمة الشفهية المتتابعة
              والفورية، وتسجيل وقراءة الأصوات، وتدقيق النصوص والأبحاث العلمية
              والأدبية، وغيرها من الأعمال والنشاطات المتعلقة باللغات العربية
              واليابانية والإنجليزية.
            </p>
            <p className="services services1 fw-bold  right">
              <HiChevronLeft />
              فريق من مُدرِّسي اللغتين العربية واليابانية
            </p>
            <p className="services services2 fw-bold  right">
              <HiChevronLeft />
              خبرة طويلة
              وغنية في تدريس اللغتين العربية واليابانية
            </p>
            <p className="services services3 fw-bold  right">
              <HiChevronLeft />
              خبرة طويلة
              وغنية في مجال الترجمة الكتابية            </p>
            <button type="button" className="login rounded btn_Definition">
              احجز مقعدك
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
