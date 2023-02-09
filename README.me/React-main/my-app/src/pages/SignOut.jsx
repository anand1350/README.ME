import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function SignOut({ setMe }) {
  const navigate = useNavigate();
  useEffect(() => {
    setMe(undefined);
    localStorage.removeItem("token");
    localStorage.removeItem("me");
    navigate("/signin");
  }, []);

  <div className="w-100 m-vh-100 d-flex align-items-center justify-content-center"></div>;
}
