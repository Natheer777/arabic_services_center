import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import HashLoader from "react-spinners/HashLoader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, How, OurServices, Contact } from "./pages/index";

function App() {
  //////////////////////////////

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  ////////////////////////////

  useEffect(() => {
    const up = document.querySelectorAll(".up");

    const handleScroll = () => {
      window.scrollY >= 120
        ? up.forEach((item) => item.classList.add("look"))
        : up.forEach((item) => item.classList.remove("look"));
    };

    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("scroll", handleScroll);
    up.forEach((item) => item.addEventListener("click", handleScrollToTop));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      up.forEach((item) =>
        item.removeEventListener("click", handleScrollToTop)
      );
    };
  }, []);

  //////////////////////////

  useEffect(() => {
    setInterval(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      });

      const leftElements = document.querySelectorAll(".left");
      const rightElements = document.querySelectorAll(".right");
      const hiddenElements = document.querySelectorAll(".hidden");
      const topElements = document.querySelectorAll(".top");
      leftElements.forEach((el) => observer.observe(el));
      rightElements.forEach((el) => observer.observe(el));
      hiddenElements.forEach((el) => observer.observe(el));
      topElements.forEach((el) => observer.observe(el));

      return () => {
        leftElements.forEach((el) => observer.unobserve(el));
        rightElements.forEach((el) => observer.unobserve(el));
        hiddenElements.forEach((el) => observer.unobserve(el));
        topElements.forEach((el) => observer.unobserve(el));
      };
    });
  }, []);

  ////////////////////////////////
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  ////////////////////////////

  return (
    <>
      <button className="up">up</button>
      {loading ? (
        <HashLoader
          style={{}}
          className="loading"
          color={"#2b8958"}
          loading={loading}
          size={30}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/arabic_services_center/" element={<Home />} />
              <Route path="/How" element={<How />} />
              <Route path="/OurServices" element={<OurServices />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
