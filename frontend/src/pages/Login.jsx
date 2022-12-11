import axios from "axios";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/login.css";

function Login() {
  const [id, setId] = useState();
  const [senha, setSenha] = useState();
  const [carregando, setCarregando] = useState(0);
  const baseURL = "http://localhost:3001/auth/login";

  const dispatch = useDispatch();
  const history = useHistory();

  function auth() {
    setCarregando(1);

    const headers = {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=UTF-8",
    };

    const dadosLogin = {
      id: id,
      senha: senha,
    };

    axios
      .post(baseURL, dadosLogin, {
        headers: headers,
      })
      .then((res) => {
        setCarregando(0);
        toast.success("Seja bem vindo!");
        if (res.data.error) {
          alert(res.data.error);
        } else {
          localStorage.setItem("accessToken", res.data);
        }
        dispatch({
          type: "LOGIN",
          usuarioId: res.data.id,
          usuarioNome: res.data.nome,
          usuarioToken: res.data.usuarioToken,
        });

        history.push("/home");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
        setCarregando(0);
      });
  }

  return(
    <>
      {useSelector((state) => state.usuarioLogado) > 0
        ? (<Redirect to="/home" />)
        : null}
      <div>
        <Toaster />
      </div>
      <form id="login-form">
        <div class="teste">
            <h1><a href="./main.html">ALSET</a></h1>

            <input type="text" class="forms-input" placeholder="Nome">
            <input type="text" class="forms-input" placeholder="SIAPE">
            <input type="text" class="forms-input" placeholder="CPF">
            <input type="password" class="forms-input" placeholder="Senha">

            <input type="submit" value="Cadastrar" id="forms-bttn">
            <a href="./login.html" id="forms-txt">Entrar</a>
        </div>
    </form>
    </>
  );
}

export default Login;