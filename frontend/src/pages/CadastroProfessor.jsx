import axios from "axios";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import "../styles/cadastrar.css";

function CadastrarProfessor() {
  const [id, setId] = useState();
  const [nome, setNome] = useState();
  const [CPF, setCpf] = useState();
  const [senha, setSenha] = useState();
  const [carregando, setCarregando] = useState(0);
  const baseURL = "http://localhost:3001/auth";

  const dispatch = useDispatch();
  const history = useHistory();
  function cadastrar() {
    setCarregando(1);

    const dadosCadastro = {
      nome: nome,
      cpf: CPF,
      senha: senha,
    };

    const headers = {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=UTF-8",
    };

    axios
      .post(baseURL, dadosCadastro, {
        headers: headers,
      })
      .then((res) => {
        setCarregando(0);
        toast.success("Cadastro realizado com sucesso");
        history.push("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.error);
        setCarregando(0);
      });
  }

  return (
    
  );
}

export default CadastrarProfessor;