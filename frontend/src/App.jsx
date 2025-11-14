import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";

import LoginPage from "./routes/LoginPage";
import HomePage from "./routes/Home";
import TrilhasPage from "./routes/Trilhas";
import BemEstarPage from "./routes/BemEstar";
import PerfilPage from "./routes/Perfil";

export default function App() {
  const [logado, setLogado] = useState(false);
  const [usuarioEmail, setUsuarioEmail] = useState("");

  const [trilhas, setTrilhas] = useState([
    { nome: "React Avançado", progresso: 75 },
    { nome: "TypeScript Mastery", progresso: 50 },
    { nome: "Node.js Backend", progresso: 30 },
  ]);

  return (
    <BrowserRouter>
      <RoutedPages
        logado={logado}
        setLogado={setLogado}
        usuarioEmail={usuarioEmail}
        setUsuarioEmail={setUsuarioEmail}
        trilhas={trilhas}
        setTrilhas={setTrilhas}
      />
    </BrowserRouter>
  );
}

function RoutedPages({ logado, setLogado, usuarioEmail, setUsuarioEmail, trilhas, setTrilhas }) {
  const navigate = useNavigate();

  const onNavigate = (nome) => {
    const rota = nome.toLowerCase().replace("é", "e").replace(" ", "-");
    navigate("/" + rota);
  };

  const onLogout = () => {
    setLogado(false);
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          logado ? (
            <Navigate to="/home" />
          ) : (
            <LoginPage
              onLoginSuccess={(email) => {
                setUsuarioEmail(email);
                setLogado(true);
              }}
            />
          )
        }
      />

      <Route
        path="/home"
        element={
          logado ? (
            <HomePage
              trilhas={trilhas}
              username={usuarioEmail}
              onNavigate={onNavigate}
              onLogout={onLogout}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route
        path="/trilhas"
        element={
          logado ? (
            <TrilhasPage
              trilhas={trilhas}
              setTrilhas={setTrilhas}
              username={usuarioEmail}
              onNavigate={onNavigate}
              onLogout={onLogout}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route
        path="/bem-estar"
        element={
          logado ? (
            <BemEstarPage
              username={usuarioEmail}
              onNavigate={onNavigate}
              onLogout={onLogout}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route
        path="/perfil"
        element={
          logado ? (
            <PerfilPage
              trilhas={trilhas}
              username={usuarioEmail}   // <-- AQUI ESTÁ A CORREÇÃO
              onNavigate={onNavigate}
              onLogout={onLogout}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
