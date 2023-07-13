import React, { useEffect } from "react";
import "./Footer.scss";

const Footer = ({ autoClose }) => {
  const hideFooter = () => {
    document.querySelector("footer").style.transform = "translateY(100%)";
    setTimeout(() => {
      document.querySelector("footer").style.display = "none";
    }, 500);
  };
  const showFooter = () => {
    document.querySelector("footer").style.display = "flex";
    setTimeout(() => {
      document.querySelector("footer").style.transform = "translateY(0)";
    }, 500);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      showFooter();
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      hideFooter();
    }, autoClose + 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <footer className="active">
      <button onClick={hideFooter}>
        <img src="/images/icon-remove.svg" alt="Hide footer" />
      </button>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io" target="_blank">
        Frontend Mentor
      </a>
      . Coded by
      <a href="https://www.github.com/BhudiaMukund" target="_blank">
        BhudiaMukund
      </a>
    </footer>
  );
};

export default Footer;
