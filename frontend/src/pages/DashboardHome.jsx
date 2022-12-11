import React from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "../styles/dashboard-home.css";

function DashboardHome() {
  const dispatch = useDispatch();
  
  function sair() {
    dispatch({ type: "LOGOUT" });
  }

  const usuarioNome = useSelector((state) => state.usuarioId);
  return (
    
  );
}

export default DashboardHome;